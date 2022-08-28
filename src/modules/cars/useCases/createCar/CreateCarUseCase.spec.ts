import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarUseCase: CreateCarUseCase;

describe("Create car", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Name",
            description: "Car description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Car Brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id");
    });

    it("should be able to create a new car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Available",
            description: "Car description",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Car Brand",
            category_id: "category",
        });

        expect(car.available).toBe(true);
    });

    it("should not be able to create a car with an existing license plate", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Car1",
                description: "Car description",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Car Brand",
                category_id: "category",
            });

            await createCarUseCase.execute({
                name: "Car2",
                description: "Car description",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Car Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
