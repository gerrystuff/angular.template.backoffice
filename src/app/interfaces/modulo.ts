import { SubModuleI } from "./submodulo";

export interface ModuleI {
    name: string,
    path: string,
    class: string,
    iconClass: string,
    subModules: {
        isEmpty: boolean,
        data: Array<SubModuleI>
    }
}

