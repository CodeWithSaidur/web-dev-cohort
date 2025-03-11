const userRegistration = async (req, res) => {
  // get data
  const { name, email, password } = req.body;

  // validate
  if (!name || !email || !password) {
    return res.status(400).json({
      massage: "All fides Mandatory",
    });
  }

  // check if user already exist
  // create user in DB
  // create a verification token
  // sava token in db
  // send token as email user
  // send success status to user
};
export { userRegistration };
