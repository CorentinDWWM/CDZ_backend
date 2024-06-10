const router = require("express").Router();
const {
  signupUser,
  verifyMail,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/user-controller");

// l'url correspond à localhost:5000/api/users

router.post("/signup", signupUser);

router.post("/signin", loginUser);

router.get("/verifyMail/:token", verifyMail);

router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);

module.exports = router;
