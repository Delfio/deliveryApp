import { FastifyInstance } from "fastify";

export default (server: FastifyInstance) => {
  // Setando versão da API
  server.setErrorHandler((error, req, repl) => {
    console.log(error);

    repl.statusCode = 500;
    repl.send({
        error: true,
        message: error.message
    })
  });
};
