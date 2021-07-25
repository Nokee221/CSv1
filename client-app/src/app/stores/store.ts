import { createContext, useContext } from "react";
import { isExportDeclaration } from "typescript";
import ActivityStore from "./activitiyStore";

interface Store {
    acitivityStore: ActivityStore
}

export const store: Store = {
    acitivityStore: new ActivityStore()
}

export const StoreContext = createContext(store);


export function useStore() {
    return useContext(StoreContext);
}