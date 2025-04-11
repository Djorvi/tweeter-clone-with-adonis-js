import vine from '@vinejs/vine'

export const RegisterUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().minLength(3),
    email: vine.string().email(),
    password: vine
      .string()
      .minLength(8)
      .maxLength(32)
      .confirmed(),
  })
)

export const LoginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(8),
  })
)