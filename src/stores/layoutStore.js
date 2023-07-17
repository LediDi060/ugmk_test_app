import { makeAutoObservable } from "mobx";

export class LayoutStore {
    showLoadingBar = false;

    constructor() {
        makeAutoObservable(this);
    }

    setShowLoader(mode) {
        this.showLoadingBar = mode;
    }
}