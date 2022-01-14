import clientAuth from "./clientAuth"
import deliverymanAuth from "./deliverymanAuth";

type IAuth = "Client" | "Deliveryman";

const result = {
    "Client": clientAuth,
    "Deliveryman": deliverymanAuth
}

export default (type: IAuth) => result[type];