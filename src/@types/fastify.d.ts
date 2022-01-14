import {FastifyRequest} from 'fastify';
declare module 'fastify' {
    export interface FastifyRequest extends FastifyRequest {
        id_client?: string,
        id_deliveryman?: string
    }
}