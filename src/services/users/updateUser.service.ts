import { IUserResponse, IUserUpdate } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPassSerializer } from "../../serializers/users.serializers";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUserResponse> => {
  if (Object.keys(userData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const userRepository = AppDataSource.getRepository(User);

  if (userData.email) {
    const validationEmail = await userRepository.findOneBy({
      email: userData.email,
    });

    if (validationEmail) {
      throw new AppError("This email already exists", 409);
    }
  }

  const findUser = await userRepository.findOneBy({
    id: Number(userId),
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const validatedUser = userWithoutPassSerializer.validate(updatedUser, {
    stripUnknown: true,
  });

  return validatedUser;
};

export default updateUserService;
