import { IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { AppError } from "../../errors/AppError";

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (userAlreadyExists) {
    throw new AppError("User Already Exists", 409);
  }

  const newUser = userRepository.create(userData);

  const newSavedUser = await userRepository.save(newUser);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    newSavedUser,
    {
      stripUnknown: true,
    }
  );
  return userWithoutPassword;
};

export default createUserService;
