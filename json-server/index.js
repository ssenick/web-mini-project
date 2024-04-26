const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
   await new Promise((resolve) => {
      setTimeout(resolve, 800);
   });
   next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
   try {
      const { username, password } = req.body;
      const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
      const { users = [] } = db;

      const userFromBd = users.find((user) => user.username === username && user.password === password);

      if (userFromBd) {
         return res.json(userFromBd);
      }

      return res.status(403).json({ message: 'User not found blya' });
   } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
   }
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
   // Определите эндпоинты, которые доступны без авторизации
   const publicEndpoints = ['/posts', '/topics'];

   // Если запрос идет к публичному эндпоинту, пропустите его без проверки авторизации
   if (publicEndpoints.includes(req.path)) {
      return next();
   }

   if (!req.headers.authorization) {
      return res.status(403).json({ message: 'User is not authorized' });
   }

   next();
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
   console.log('server is running on 8000 port');
});
