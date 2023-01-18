import { IUserRequest, IUserResponse } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPassSerializer } from "../../serializers/users.serializers";
import { AppError } from "../../errors/AppError";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  if (userData.level) {
    if (userData.level !== "Junior" || "Pleno" || "Sênior" || "Master") {
      throw new AppError(
        "Level must be 'Junior', 'Pleno', 'Sênior' or 'Master'",
        406
      );
    }
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const validatedUser = userWithoutPassSerializer.validate(user, {
    stripUnknown: true,
  });

  return validatedUser;
};

export default createUserService;
