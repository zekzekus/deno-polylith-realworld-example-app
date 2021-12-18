import { log, pogo } from "./deps.ts";
import { routes } from "./api.ts";

const server = pogo.server({ port: 3000 });

server.route(routes);

log.info("Server started on " + server.options.port);
server.start();
