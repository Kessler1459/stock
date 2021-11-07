import { Provider } from "./provider";

export class Product {
    id: number | undefined;
    brand: string | undefined;
    model: string | undefined;
    imageUrl: string | undefined;
    barcode: string | undefined;
    price: number | undefined;
    units: number | undefined;
    description: string | undefined;
    category: Category | undefined;
    provider: Provider | number | undefined;
    serviceLevel: number | undefined;
    prepareCost: number | undefined;
    storageCost: number | undefined;
    revisionPeriod: number | undefined;

    constructor(id?: number, brand?: string, model?: string, imageUrl?: string, barcode?: string, price?: number, units?: number, description?: string, category?: Category, provider?: Provider, serviceLevel?: number,prepareCost?: number,storageCost?: number,revisionPeriod?:number) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.imageUrl = imageUrl;
        this.barcode = barcode;
        this.price = price;
        this.units = units;
        this.description = description;
        this.category = category;
        this.provider = provider;
        this.serviceLevel = serviceLevel;
        this.prepareCost=prepareCost;
        this.storageCost=storageCost;
        this.revisionPeriod=revisionPeriod;
    }
}

export enum Category {
    A = "A",
    B = "B",
    C = "C"
}
