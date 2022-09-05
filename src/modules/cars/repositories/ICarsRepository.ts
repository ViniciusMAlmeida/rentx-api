import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    findByLicensePlate(license_plate: string): Promise<Car | undefined>;
    create(data: ICreateCarDTO): Promise<Car>;
    findAvailable(
        category_id?: string,
        brand?: string,
        name?: string
    ): Promise<Car[]>;
    findById(id: string): Promise<Car | undefined>;
    updateAvailable(id: string, available: boolean): Promise<void>;
}

export { ICarsRepository };
