import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers";
import { IUserResponse } from "../../interfaces/users.interface";

const listUserByIdService = async (id: string): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy(
        {
            id: Number(id)
        }
    )

    const listUserWithoutPassword =
    await userWithoutPasswordSerializer.validate(userWithoutPasswordSerializer, {
      stripUnknown: true,
      abortEarly: false,
    });

    return listUserWithoutPassword
}

export default listUserByIdService