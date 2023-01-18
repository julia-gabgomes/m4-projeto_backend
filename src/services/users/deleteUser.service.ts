import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

const deleteUserService = async (id: string): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);

  await userRepository.update(
    {
      id: Number(id),
    },
    {
      isActive: false,
    }
  );

  return {};
};

export default deleteUserService;
