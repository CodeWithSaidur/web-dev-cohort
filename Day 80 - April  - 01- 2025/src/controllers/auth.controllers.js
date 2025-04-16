import { body } from "express-validator";
import { registerValidation } from "";

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  // validation
  registerValidation(body);
});

export { registerUser };
