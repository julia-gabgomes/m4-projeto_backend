import { IUserResponse } from "./users.interface";
interface ITechRequest {
  name: string;
}

interface ITechResponse {
  id: number;
  name: string;
}

export { ITechRequest, ITechResponse };
