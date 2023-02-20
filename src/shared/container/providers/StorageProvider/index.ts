import { container } from "tsyringe";

import { LocalStorageProvider } from "./implementations/LocalStorageProviser";
import { S3StorageProvider } from "./implementations/S3StorageProvider";
import { IStorageProvider } from "./IStorageProvider";

const selectedDiskStorage =
    process.env.DISK === "local" ? LocalStorageProvider : S3StorageProvider;

container.registerSingleton<IStorageProvider>(
    "StorageProvider",
    selectedDiskStorage
);
