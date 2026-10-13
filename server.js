// Point d'entrée pour Plesk (Node.js / Phusion Passenger).
// Plesk > Node.js > « Fichier de démarrage » = server.js
const { createServer } = require('http');
const next = require('next');

const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Living Cheers prêt (port ${port})`);
  });
});
