import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

class ICarsRepository {
    create(data: ICreateCarDTO): Promise<void>;
}

export { ICarsRepository };
