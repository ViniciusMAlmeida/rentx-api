import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 1",
            description: "Car description",
            daily_rate: 70,
            license_plate: "ABC-4321",
            fine_amount: 40,
            brand: "Car brand",
            category_id: "Category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("shoud be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 2",
            description: "Car description",
            daily_rate: 70,
            license_plate: "ABC-4321",
            fine_amount: 40,
            brand: "Car brand 2",
            category_id: "Category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car brand 2",
        });

        expect(cars).toEqual([car]);
    });

    it("shoud be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 3",
            description: "Car description",
            daily_rate: 70,
            license_plate: "ABC-4322",
            fine_amount: 40,
            brand: "Car brand 3",
            category_id: "Category_id",
        });

        const cars = await listAvailableCarsUseCase.execute({ name: "Car 3" });

        expect(cars).toEqual([car]);
    });

    it("shoud be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 3",
            description: "Car description",
            daily_rate: 70,
            license_plate: "ABC-4322",
            fine_amount: 40,
            brand: "Car brand 3",
            category_id: "12345",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "12345",
        });

        expect(cars).toEqual([car]);
    });
});
