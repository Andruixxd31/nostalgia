import User from "../models/users.js"

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let errors = [];
  if (password !== confirmPassword) {
    errors.push({ text: "Passwords do not match." });
  }

  if (password.length < 8) {
    errors.push({ text: "Passwords muts be at least 8 characters" });
  }

  const userFound = await User.findOne({ email: email })
  if (userFound) {
    errors.push({ text: "Email already registered" });
  }

  if (errors.length > 0) {
    res.status(400).json({
      status: "unsuccesful",
      message: errors,
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
  });
  return;
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email: email })
  if (!userFound) {
    res.status(400).json({
      status: "unsuccesful",
      message: "email not found"
    });
    return;
  }

  if (! await userFound.matchPassword(password)) {
    res.status(400).json({
      status: "unsuccesful",
      message: "Incorrect password"
    });
    return;
  }

  res.status(200).json({
    status: "success",
    message: "user logged in"
  });
  return;
}

export const logout = async (req, res) => {
  const { email } = req.body;

  //TODO: add auth system to logout user form authentications

  res.status(200).json({
    status: "success",
    message: "user logged out"
  });
  return;
};


export const deleteUser = async (req, res) => {
  const { email } = req.body;

  //TODO: add auth system to check user is authenticated
  const userFound = await User.deleteOne({ email: email })
  console.log(userFound)

  res.status(200).json({
    status: "success",
    message: "user deleted it"
  });
  return;
}
