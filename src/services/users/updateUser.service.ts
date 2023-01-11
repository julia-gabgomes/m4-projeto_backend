// import { IUserRequest, IUser, IUserUpdate } from "../../interfaces/users";
import { IUserUpdate } from "../../interfaces/users.interface";
import AppDataSource from "../../data-source";
import  User  from "../../entities/user.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers"; 
import { appError } from "../../errors/AppError";

const updateUserService = async (userData: IUserUpdate, userId: string): Promise<IUserUpdate> => {
  
  if (Object.keys(userData).length === 0) {
    throw new appError("Fields are not able to update", 401);
  }

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: Number(userId),
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
