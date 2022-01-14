
type IApplicationAuthModule = "client" | "deliveryman";

const ENV = {
  SECRET_JSON: {
    client: "essa mulher é muito chata mermau",
    deliveryman: "essa mulher é muito chata mermau2",
  },
};

const EXECUTION_TYPE: "PROD" | "DEV" = "DEV";

export { ENV, EXECUTION_TYPE, IApplicationAuthModule };
