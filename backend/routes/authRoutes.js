const express = require("express");
const { body, validationResult } = require("express-validator");
const {
  signup,
  signin,
  getProfile,
  setProduct,
  getProducts,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
// const { getProducts } = require("../controllers/authController");

const router = express.Router();

const validate = (checks) => [
  ...checks,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

// @route   POST /api/signup
router.post(
  "/signup",
  validate([
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ]),
  signup
);

// @route   POST /api/signin
router.post(
  "/signin",
  validate([
    body("email").isEmail().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ]),
  signin
);

router.post("/allProducts", setProduct);
// @route   GET /api/profile

router.get("/getProducts", getProducts);
router.get("/profile", protect, getProfile);

module.exports = router;
