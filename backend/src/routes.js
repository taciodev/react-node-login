const Router = require("express").Router;

const route = Router();
const users = [
  {
    id: 1,
    name: "Taciano",
    email: "contato@hotmail.com",
    password: "12345",
  },
];

route.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    res.status(200).json(user);
  }

  res.status(401).json({ message: "Credenciais inválidas" });
});

module.exports = route;
