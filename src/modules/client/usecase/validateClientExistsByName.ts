import IClient from "@domain/client/entity/IClient";
import IValidateClientExistsByName from "@domain/client/usecase/IValidateClientExistsByName";
import database from "@infra/database";

class ValidateClientExistsByName implements IValidateClientExistsByName {
  private bdConnection;

  constructor() {
    this.bdConnection = database();
  }
  async handle(clientName: string): Promise<IClient | null> {
    const clientExists = await this.bdConnection.client.findFirst({
      where: {
        username: {
          mode: "insensitive",
          equals: clientName,
        },
      },
    });

    return clientExists;
  }
}

export default ValidateClientExistsByName;