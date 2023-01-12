import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { usersWithoutPasswordSerializer } from "../../serializers/user.serializer";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const updatedUsersWithoutPassword =
    await usersWithoutPasswordSerializer.validate(users, {
      stripUnknown: true,
      abortEarly: false,
    });

  return updatedUsersWithoutPassword;
};

export default listUserService;
