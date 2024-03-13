import bcrypt from 'bcrypt';

import User from '../models/userModel.js';

export const signIn = async (req, res) => {
  try {
    const { username, email, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = await User.create({
      username,
      email,
      password: hash,
      role,
    });

    return res.status(201).json({ username, email });
  } catch (error) {
    console.error('Register error: ', error);
    res.status(500).json({ message: error.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        message: 'Invalid password or email',
      });
    }

    return res
      .status(200)
      .json({ username: user.username, email: user.email, role: user.role });
  } catch (error) {
    console.error('Login error: ', error);
    res.status(500).json({ message: error.message });
  }
};
