import IHashPassword, {
  IHashPasswordRequest,
} from "@domain/shared/usecase/IHashPassword";
import { hash } from 'bcrypt';

class HashPassword implements IHashPassword {
    async handle(req: IHashPasswordRequest): Promise<string> {
        return hash(req.userPassword, 10);
    }
}

export default HashPassword;