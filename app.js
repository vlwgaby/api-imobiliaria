const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require('cors');


const port = process.env.PORT || 3000;

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`O servidor JSON está rodando na porta http://localhost:${port}`)
})