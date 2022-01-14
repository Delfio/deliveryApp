import { FastifyReply, FastifyRequest } from "fastify";
import FindAllWithoutEndDate from "../usecase/findAllAvailable";

class FindAllWithoutEndDateController {
    async handle(
        _: FastifyRequest,
        response: FastifyReply
      ): Promise<void> {
        const findAllWithoutEndDate = new FindAllWithoutEndDate();
        return findAllWithoutEndDate
            .handle(null)
            .then(_deliveries => {
                response.statusCode = 200;
                response.send(_deliveries);
            })
      }
}

export default FindAllWithoutEndDateController;
