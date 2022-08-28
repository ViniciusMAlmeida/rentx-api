import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

class ICarsRepository {
    findByLicensePlate(license_plate: string): Promise<Car | undefined>;
    create(data: ICreateCarDTO): Promise<Car>;
}

export { ICarsRepository };
