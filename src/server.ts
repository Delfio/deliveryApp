import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import RoutesBootstrap from './bootstrap/routes';
import HandleGenricError from './bootstrap/handleGenricError';

const server = fastify({
    logger: true,
});

async function handle(req: FastifyRequest, res: FastifyReply) {
    res.send({
        ok: "is trusty"
    })
}

server.get("/", handle)

RoutesBootstrap(server);
HandleGenricError(server);
server.listen(3333, () => console.log("ok"));
