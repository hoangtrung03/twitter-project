import axios, { AxiosError, type AxiosInstance, InternalAxiosRequestConfig } from 'axios'

import { URL_LOGIN, URL_LOGOUT, URL_REFRESH_TOKEN, URL_REGISTER } from '../apis/auth.api'
import { config } from '../constants/config'
import { HttpStatusCode } from './httpStatusCode.enum'
import { AuthResponse, RefreshTokenReponse } from '../types/auth.type'
import { ErrorResponse } from '../types/utils.type'

import {
  clearCookie,
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  setAccessTokenToCookie,
  setRefreshTokenToCookie
} from './auth'
import { isAxiosExpiredTokenError, isAxiosUnauthorizedError } from './utils'

class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<string> | null
  constructor() {
    //bien accessToken goi tren ram nhanh hon khi goi trong file nen dat vao contructor
    this.accessToken = getAccessTokenFromCookie()
    this.refreshToken = getRefreshTokenFromCookie()
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'expire-access-token': 60 * 60 * 24, // 1 day
        'expire-refresh-token': 60 * 60 * 24 * 160 // 160 day
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    //Add a response interceptor
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse
          this.accessToken = data.data.access_token
          this.refreshToken = data.data.refresh_token
          setAccessTokenToCookie(this.accessToken)
          setRefreshTokenToCookie(this.refreshToken)
        } else if (url === URL_LOGOUT) {
          this.accessToken = ''
          this.refreshToken = ''
          clearCookie()
        }
        return response
      },
      (error: AxiosError) => {
        if (
          ![HttpStatusCode.UnprocessableEntity, HttpStatusCode.Unauthorized].includes(error.response?.status as number)
        ) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          console.log(message)
        }
        if (isAxiosUnauthorizedError<ErrorResponse<{ name: string; message: string }>>(error)) {
          const config = error.response?.config || ({ headers: {} } as InternalAxiosRequestConfig)
          const { url } = config

          //When token expires and request not request refresh token => go to call refresh token
          if (isAxiosExpiredTokenError(error) && url !== URL_REFRESH_TOKEN) {
            // Prevent call 2 refresh token handleRefreshToken
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleRefreshToken().finally(() => {
                  // Hold refreshTokenRequest in 10s for request if 401 to use
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 10000)
                })

            return this.refreshTokenRequest.then((access_token) => {
              return this.instance({ ...config, headers: { ...config.headers, authorization: access_token } })
            })
          }
          clearCookie()
          this.accessToken = ''
          this.refreshToken = ''
          console.log(error.response?.data.data?.message || error.response?.data.message)
        }

        return Promise.reject(error)
      }
    )
  }
  private handleRefreshToken() {
    return this.instance
      .post<RefreshTokenReponse>(URL_REFRESH_TOKEN, {
        refresh_token: this.refreshToken
      })
      .then((res) => {
        const { access_token } = res.data.data
        setAccessTokenToCookie(access_token)
        this.accessToken = access_token
        return access_token
      })
      .catch((error) => {
        clearCookie()
        this.accessToken = ''
        this.refreshToken = ''
        throw error
      })
  }
}

const http = new Http().instance

export default http
