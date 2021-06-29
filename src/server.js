const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const routeBooks = require('./routesBook');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  server.route(routeBooks);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
