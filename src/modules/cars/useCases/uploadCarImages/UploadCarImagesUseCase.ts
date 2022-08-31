import { inject, injectable } from "tsyringe";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { deleteFile } from "@utils/file";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
    constructor(
        @inject("CarsImagesRepository")
        private carsImagesRepository: ICarsImagesRepository
    ) {}
    async execute({ car_id, images_name }: IRequest): Promise<void> {
        const imagesExists = await this.carsImagesRepository.find(car_id);

        if (imagesExists) {
            imagesExists.forEach(async (image) => {
                await deleteFile(`./tmp/cars/${image.image_name}`);
            });
            await this.carsImagesRepository.removeAll(car_id);
        }

        images_name.forEach(async (image) => {
            await this.carsImagesRepository.create(car_id, image);
        });
    }
}

export { UploadCarImagesUseCase };
