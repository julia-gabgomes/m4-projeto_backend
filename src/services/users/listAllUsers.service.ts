import { IUserResponse } from "./../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { usersListWithoutPassSerializer } from "../../serializers/users.serializers";

const listAllUsersService = async (): Promise<IUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const validatedList = await usersListWithoutPassSerializer.validate(users, {
    stripUnknown: true,
  });

  return validatedList;
};

export default listAllUsersService;
