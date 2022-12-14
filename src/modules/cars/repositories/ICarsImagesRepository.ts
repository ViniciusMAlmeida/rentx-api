import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
    create(car_id: string, image_name: string): Promise<CarImage>;
    find(car_id: string): Promise<CarImage[] | undefined>;
    removeAll(car_id: string): Promise<void>;
}

export { ICarsImagesRepository };
