// import type { RegisterOptions } from 'react-hook-form'
import * as yup from 'yup'

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Confirm password is required')
    .min(6, 'Length from 6 - 160 character')
    .max(160, 'Length from 6 - 160 character')
    .oneOf([yup.ref(refString)], 'Please input correct password')
}

export const schema = yup.object({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is requireds')
    .min(6, 'Password length must be from 6 to 50')
    .max(50, 'Password length must be from 6 to 50'),
  confirm_password: handleConfirmPasswordYup('password'),
  name: yup.string().trim().required('Name is required')
})

export const userSchema = yup.object({
  name: yup.string().max(100, 'Name length must be from 1 to 100'),
  phone: yup.string().max(20, 'Length max 20 character'),
  address: yup.string().max(160, 'Length max 160 character'),
  avatar: yup.string().max(1000, 'Length max 160 character'),
  date_of_birth: yup.date().max(new Date(), 'Please choose date in past'),
  password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>,
  new_password: schema.fields['password'] as yup.StringSchema<string | undefined, yup.AnyObject, undefined, ''>,
  confirm_password: handleConfirmPasswordYup('new_password')
})

export type UserSchema = yup.InferType<typeof userSchema>
export type Schema = yup.InferType<typeof schema>
