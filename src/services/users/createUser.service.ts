import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPassSerializer } from "../../serializers/users.serializers";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const validatedUser = userWithoutPassSerializer.validate(user, {
    stripUnknown: true,
  });

  return validatedUser;
};

export default createUserService;
