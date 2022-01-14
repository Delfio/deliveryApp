
export interface IHashPasswordRequest {
    userPassword: string;
}

interface IHashPassword {
    handle: (req: IHashPasswordRequest) => Promise<string>;
}


export default IHashPassword;