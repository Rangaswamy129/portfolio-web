module.exports = (req, res, next) => {
  try {
    // check session instead of token
    if (!req.session || !req.session.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    // optional: attach user to request
    req.user = req.session.user;

    next();
  } catch (error) {
    console.log("AUTH MIDDLEWARE ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};