// Point d'entrée pour Plesk (Node.js / Phusion Passenger).
// Plesk > Node.js > « Fichier de démarrage » = server.js
const { createServer } = require('http');
const { rmSync } = require('fs');
const path = require('path');
const next = require('next');

// Next.js garde en cache sur le disque les pages qu'il a déjà servies.
// Ce cache n'est pas mis à jour par Git : après un déploiement, il pourrait
// resservir d'anciennes pages. On le vide donc à chaque démarrage.
rmSync(path.join(__dirname, '.next', 'server', 'route-cache'), { recursive: true, force: true });

const port = parseInt(process.env.PORT || '3000', 10);
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, () => {
    console.log(`Living Cheers prêt (port ${port})`);
  });
});
