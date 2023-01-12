import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.serializers";

const listUserByIdService = async (id: string): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy(
        {
            id: Number(id)
        }
    )   

    const {password, ...userWhithoutPassoword } = user

    return userWhithoutPassoword
}

export default listUserByIdService