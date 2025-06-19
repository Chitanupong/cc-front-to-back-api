export const createError = (code, message) => {
  const error = new Error(message)
  error.status = code
  throw error;
}