import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { AppError } from "../../errors/AppError";

const userDeleteService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: id,
  });

  await userRepository.softRemove(findUser);
};

export default userDeleteService;
