import AppDataSource from "../../data-source";
import  User  from "../../entities/user.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers"; 

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const updatedUsersWithoutPassword =
    await userWithoutPasswordSerializer.validate(users, {
          
      stripUnknown: true,
      abortEarly: false,
    });

  return updatedUsersWithoutPassword;
};

export default listUserService;
