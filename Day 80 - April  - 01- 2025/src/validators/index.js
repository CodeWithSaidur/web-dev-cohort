import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("email").trim().notEmpty().withMessage("Email is required"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("User Name Required")
      .isLength({ min: 3 })
      .withMessage("UserName Should be at least 3 char")
      .isLength({ max: 13 })
      .withMessage("UserName cannot exceed 13 char"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("Email cannot be empty"),
  ];
};

export { userRegistrationValidator, userLoginValidator };
