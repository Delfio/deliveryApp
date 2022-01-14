import IClient from "@domain/client/entity/IClient";
import IValidateClientExistsByID from "@domain/client/usecase/IValidateClientExistsByID";
import database from "@infra/database";

class ValidateClientExistsByID implements IValidateClientExistsByID {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }

  async handle(req: string): Promise<IClient | null> {
    return this.bdConnection.client.findFirst({
      where: {
        id: req,
      },
    });
  }
}

export default ValidateClientExistsByID;
