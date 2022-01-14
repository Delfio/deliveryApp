import IValidateClientPassword, {
  IValidateClientPasswordRequest,
} from "@domain/auth/usecase/IValidateClientPassword";
import { compare } from "bcrypt";

class ValidateClientPassword implements IValidateClientPassword {
  async handle(req: IValidateClientPasswordRequest): Promise<boolean> {
    const { clientRequestPassword, clientHashedPassword } = req;
    return compare(clientRequestPassword, clientHashedPassword);
  }
}

export default ValidateClientPassword;
