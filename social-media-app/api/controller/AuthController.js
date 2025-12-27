const { db } = require("../connection/Database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const queryAsync = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

exports.register = async (req, res) => {
  console.log("register called");
  try {
    const q = "SELECT * FROM users WHERE username=? OR email=?";

    const existingUser = await queryAsync(q, [
      req.body.username,
      req.body.email,
    ]);
    if (existingUser.length > 0) {
      return res.status(400).json("Username OR Email already Exists!");
    }

    const saltRounds = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const q3 =
      "INSERT INTO `users` (`username`, `email`, `password`, `name`) VALUES (?, ?, ?, ?)";

    await queryAsync(q3, [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ]);
    return res.json("User created Successfully!");
  } catch (err) {
    console.log(err);
    return res.status(400).json("Something Went Wrong");
  }
};
exports.login = async (req, res) => {
  const { email } = req.body;

  const q = "SELECT * FROM users WHERE email=?";

  db.query(q, [email], async (err, data) => {
    if (err) return err;
    if (data.length === 0) return res.status(401).json("User not registered!");

    const passwordIsCorrect = await bcrypt.compare(
      req.body.password,
      data[0].password
    );
    console.log(passwordIsCorrect);

    if (!passwordIsCorrect)
      return res.status(401).json("Email or Password does not match!");

    const token = jwt.sign(
      {
        id: data[0].id,
      },
      "socialMedia"
    );

    const { password, ...others } = data[0];
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};
exports.logout = async (req, res) => {
  res.clearCookie("access_token", {
    secure: true,
    sameSite: "none",
  });
  return res.json("Logged Out Successfully!");
};
