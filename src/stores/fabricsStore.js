import {action, makeAutoObservable, observable} from "mobx";

export class FabricsStore {

    fabricsData = observable.array([]);

    productsData = observable.array([]);

    setFabricsData = (data) => {
        this.fabricsData = data
    }

    setProductsData = (data) => {
        this.productsData = data
    }

    constructor() {
        makeAutoObservable(this, {
            fabricsData: observable.deep,
            productsData: observable.deep,
            setFabricsData: action.bound,
            setProductsData: action.bound,
        },  { autoBind: true });
    }
};