import { body } from 'express-validator';

const userRegistrationValidator = () => {
  return [
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required'),
    body('username')
      .trim()
      .notEmpty()
      .withMessage('Username is Required')
      .isLength({ min: 3 })
      .withMessage('Username Minimum 3 Char')
      .isLength({ mix: 13 })
      .withMessage('Username Maximum 13 Char'),
  ];
};

const userLoginValidator = () => {
  return [
    body('email')
      .isEmail()
      .withMessage('Email is Not Valid'),
    body('password')
      .notEmpty()
      .withMessage('Email is not Valid'),
  ];
};

export { userRegistrationValidator, userLoginValidator };
