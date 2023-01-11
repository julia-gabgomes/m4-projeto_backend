import { IUserRequest, IUser, IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers";
import { AppError } from "../../errors/AppError";

const updateUserService = async (
  userData: IUserUpdate,
  userId: string
): Promise<IUser> => {
  if (Object.keys(userData).length === 0) {
    throw new AppError("Fields are not able to update", 401);
  }

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const updatedUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(updatedUser, {
      stripUnknown: true,
      abortEarly: false,
    });

  return updatedUserWithoutPassword;
};

export default updateUserService;
