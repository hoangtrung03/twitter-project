import { setCookie, deleteCookie, getCookie } from 'cookies-next'

export const cookieStorageEventTarget = new EventTarget()

export const setAccessTokenToCookie = (access_token: string) => {
  setCookie('access_token', access_token)
}

export const setRefreshTokenToCookie = (refresh_token: string) => {
  setCookie('refresh_token', refresh_token)
}

export const clearCookie = () => {
  deleteCookie('access_token')
  deleteCookie('refresh_token')

  const clearCookieEvent = new Event('clearCookie')
  cookieStorageEventTarget.dispatchEvent(clearCookieEvent)
}

export const getAccessTokenFromCookie = () => getCookie('access_token') || ''
export const getRefreshTokenFromCookie = () => getCookie('refresh_token') || ''
