import { createContext } from "react";
import { FabricsStore } from "./fabricsStore";
import { LayoutStore } from "./layoutStore";

export const rootStore = {
    layoutStore: new LayoutStore(),
    fabricsStore: new FabricsStore(),
};

export const rootStoreContext = createContext(rootStore);