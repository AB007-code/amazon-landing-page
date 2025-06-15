const User = require("../model/User");
const jwt = require("jsonwebtoken");
const Product = require("../model/Product");
const rawData = require("../data/products.json");
const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "Email already in use" });

    const user = new User({ name, email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({
      message: "User created successfully",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.status(200).json({
      message: "Login successful",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
};

exports.setProduct = async (req, res) => {
  try {
    const inserted = await Promise.all(
      rawData.map(async ([categoryObj, productObj]) => {
        const doc = new Product({
          category: categoryObj.category,
          data: productObj.data,
        });
        return await doc.save();
      })
    );
    res.status(200).json({ message: "Data uploaded successfully!", inserted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading data", error });
  }
};
