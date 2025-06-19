import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";
export const authCheck = (req, res, next) => {
  try {
    //  TODO Overviews
    /*
      1. Cheack header
      2. Spilt Token Bearer
      3. Verify JWT 
      4. Create req.user
    
    */
    // Step 1. Cheack header

    const header = req.headers.authorization;
    // console.log(header)

    if (!header) {
      createError(401, "Token is missing!")
    }

    // 2. Spilt Token Bearer
    const token = header.split(' ')[1]
    // console.log(token)

    
    // 3. Verify JWT 
jwt.verify(token,process.env.SECRET,(error,decode)=>{
  // console.log(error)
  // console.log(decode)

  if(error){
    createError(401,"Token is invalit")
  }
  req.user = decode;
  next();

})



  } catch (error) {
    next(error);
  }
};
