import { container } from "tsyringe";

import { IMailProvider } from "./IMailProvider";
import { EtherealMailProvider } from "./implementations/EtherealMailProvider";
import { SESMailProvider } from "./implementations/SESMailProvider";

const selectedMailProvider =
    process.env.DISK === "local"
        ? container.resolve(EtherealMailProvider)
        : container.resolve(SESMailProvider);

container.registerInstance<IMailProvider>("MailProvider", selectedMailProvider);
