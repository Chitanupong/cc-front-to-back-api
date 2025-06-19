//Validate with yup
import { object, ref, string } from "yup";




export const registerSchema = object({
  email: string().email("email ไม่ถูกต้อง").required("กรุณากรอก email"),
  name: string().min(2, "name ต้องมากว่า 2 อักขระ"),
  password: string().min(6, "password ต้องมากกว่า 6"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "confirm Password ไม่ตรงกัน")
});


export const loginrSchema = object({
  email: string().email("email ไม่ถูกต้อง").required("กรุณากรอก email"),
  password: string().min(6, "password ต้องมากกว่า 6")
});




export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false })

    next()

  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",")
    console.log(errTxt)
    const mergeErr = new error(errTxt)
    next(mergeErr)
  }
};