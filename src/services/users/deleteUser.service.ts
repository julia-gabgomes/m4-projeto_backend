import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const userDeleteService = async (id: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.update(
    {
      id: Number(id),
    },
    {
      isActive: false
    }
  );

  // await userRepository.softRemove(findUser);
};


export default userDeleteService;
