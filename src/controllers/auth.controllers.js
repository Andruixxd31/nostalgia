import User from "../models/users.js"

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  if (password !== confirmPassword) {
    res.status(400).json({
      status: "unsuccesful",
      message: "passwords don't match"
    });
  }

  if (password.length < 8) {
    res.status(400).json({
      status: "unsuccesful",
      message: "password must be at least 8 characters long"
    });
  }

  const userFound = await User.findOne({ email: email })
  if (userFound) {
    res.status(400).json({
      status: "unsuccesful",
      message: "Email already registered"
    });
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });
  console.log(user);
  res.status(200).json({
    status: "success",
    message: "user signed up"
  })

}
