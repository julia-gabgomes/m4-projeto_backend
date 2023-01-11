import AppDataSource from "../../data-source";
import User  from "../../entities/users.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers";

const listUserServices = async (): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  const returnData = await userWithoutPasswordSerializer.validate(users, {
    stripUnknown: true,
  });
  return returnData;
};

export default listUserServices;
