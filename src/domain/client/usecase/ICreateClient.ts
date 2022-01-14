export interface ICreateClientRequest {
  username: string;
  password: string;
}

interface ICreateClient {
  handle: (req: ICreateClientRequest) => Promise<any>;
}

export default ICreateClient;
