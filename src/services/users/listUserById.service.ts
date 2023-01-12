import { IUserResponse } from "./../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPassSerializer } from "../../serializers/users.serializers";

const listUserByIdService = async (id: string): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: Number(id),
  });

  const validatedUser = userWithoutPassSerializer.validate(user, {
    stripUnknown: true,
  });

  return validatedUser;
};

export default listUserByIdService;
