import IValidateDeliverymanIsOwner, {
  IValidateDeliverymanIsOwnerRequest,
} from "@domain/deliveryman/usecase/IValidateDeliverymanIsOwner";
import database from "@infra/database";

class ValidateDeliverymanIsOwner implements IValidateDeliverymanIsOwner {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(req: IValidateDeliverymanIsOwnerRequest): Promise<boolean> {
    return this.bdConnection.delivery
      .findFirst({
        where: {
          id_deliveryman: req.deliveryman_id,
          id: req.delivery_id,
        },
      })
      .then((_result) => !!_result);
  }
}

export default ValidateDeliverymanIsOwner;
