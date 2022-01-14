import IValidateClientIsOwner, {
  IValidateClientIsOwnerRequest,
} from "@domain/delivery/usecase/IValidateClientIsOwner";
import database from "@infra/database";

class ValidateClientIsOwner implements IValidateClientIsOwner {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(req: IValidateClientIsOwnerRequest): Promise<boolean> {
    const { client_id, delivery_id } = req;
    return this.bdConnection.delivery
      .findFirst({
        where: {
          id: delivery_id,
          id_client: client_id,
        },
      })
      .then((_result) => !!_result);
  }
}

export default ValidateClientIsOwner;
