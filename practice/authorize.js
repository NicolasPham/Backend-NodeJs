const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "nicolas") {
    req.user = { name: "Nicolas", id: 16 };
    res.json(req.user);
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
