const bcrypt = require("bcryptjs");
const { User } = require("../models");
const SALT = 10;

function encryptPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, SALT, (err, encryptedPassword) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(encryptedPassword);
    });
  });
}

function checkPassword(encryptedPassword, password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (!!err) {
        reject(err);
        return;
      }

      resolve(isPasswordCorrect);
    });
  });
}

module.exports = {
  async register(requestBody) {
    const encryptedPassword = await encryptPassword(requestBody.password);
    const user = await User.create({
      fullName: requestBody.fullname,
      username: requestBody.username,
      password: encryptedPassword,
      email: requestBody.email,
    });
    return {
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  },

  async login(req, res) {
    const email = req.body.email.toLowerCase(); // Biar case insensitive
    const password = req.body.password;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: "Email tidak ditemukan" });
      return;
    }

    const isPasswordCorrect = await checkPassword(
      user.encryptedPassword,
      password
    );

    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Password salah!" });
      return;
    }

    res.status(201).json({
      id: user.id,
      email: user.email,
      token: "Token",
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  },
};
