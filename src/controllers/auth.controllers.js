import User from "../models/users.js"

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.status(400).json({
      status: "unsuccesful",
      message: "passwords don't match"
    });
    return;
  }

  if (password.length < 8) {
    res.status(400).json({
      status: "unsuccesful",
      message: "password must be at least 8 characters long"
    });
    return;
  }

  const userFound = await User.findOne({ email: email })
  console.log("found: ", userFound);
  if (userFound) {
    res.status(400).json({
      status: "unsuccesful",
      message: "email already registered"
    });
    return;
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
  });

  user.password = await user.encryptPassword(password);

  user.save();
  res.status(200).json({
    status: "success",
    message: "user signed up"
  })
  return;
}
