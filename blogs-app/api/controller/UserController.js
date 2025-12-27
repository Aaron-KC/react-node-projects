const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email } = req.body;

  const usernameExists = await User.findOne({ username });

  if (usernameExists) return res.status(400).json("Username already exists.");

  const emailExists = await User.findOne({ email });

  if (emailExists) return res.status(400).json("Email already exists.");

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (!user) return res.status(400).json("Something Went Wrong!");

  res.send("User Registered Successfully!");
};

exports.login = async (req, res) => {
  try {
    console.log('login called')
    const { email} = req.body

    const user = await User.findOne({ email });
  
    if (!user) return res.status(401).json("User not registered.");
  
    const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
  
    if (!isPasswordCorrect)
      return res.status(401).json("Invalid Email or Password");
  
  
    const {password,...other} = user.toObject()
  
    const token = jwt.sign(
      {
        userId: user._id,
      },
      "user"
    );
  
    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: 'None',
      expires: new Date(Date.now() + 86400000),
      secure: process.env.NODE_ENV === "production",
    });
    
    res.status(200).json(other);
  } catch(e) {
    res.status(400).json('Something Went Wrong')
  }
};

exports.logout = async (req, res) => {
  res.clearCookie('access_token')

  res.json('user signed out successfully')
}
