import { sign } from "jsonwebtoken";
import { EXECUTION_TYPE, ENV, IApplicationAuthModule } from "../env";

type IGenerateJWTRequest = {
  username: string;
  id: string;
  type: "Client" | "Deliveryman";
};

type IAuthenticationType = IApplicationAuthModule;

function generateJWTToken(typeAuth: IAuthenticationType = "client") {
  const handle = ({ username, id, type }: IGenerateJWTRequest) => {
    const secret = ENV.SECRET_JSON[typeAuth];

    return sign(
      {
        username: username,
        type,
        Date: new Date(),
      },
      secret,
      {
        subject: id,
        expiresIn: EXECUTION_TYPE === "PROD" ? "2h" : "1d",
      }
    );
  }

  return handle;
}

export default generateJWTToken;
