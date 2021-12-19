import { log, pogo } from "./deps.ts";
import { routes } from "./api.ts";

const server = pogo.server({ port: 3000 });

export function startServer() {
  server.route(routes);

  server.start();
  log.info("Server started on " + server.options.port);
}
