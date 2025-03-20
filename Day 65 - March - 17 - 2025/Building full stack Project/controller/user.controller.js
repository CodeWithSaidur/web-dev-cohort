// *import model first and understand Schema carefully
import { User } from "../model/User.model.js";
export const registerUser = async (req, res) => {
  // get
  const { name, email, password } = req.body;
  // validate
  if ((!name, !email, !password)) {
    return res.status(400).json({
      massage: "All Fields are required",
    });
  }
  // console.log(email);
  // Check if user already exist
  
  // create a user in database
  // create a verification
  // save token in db
  // send token as email to user
  // send success massage to user
};
