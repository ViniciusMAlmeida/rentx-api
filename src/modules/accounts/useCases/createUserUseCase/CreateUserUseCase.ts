import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({
        name,
        password,
        email,
        driver_license,
    }: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license,
        });
    }
}

export { CreateUserUseCase };
