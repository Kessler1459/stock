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


    constructor(id?: number, brand?: string, model?: string, imageUrl?: string, barcode?: string, price?: number, units?: number, description?: string, category?: Category) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.imageUrl = imageUrl;
        this.barcode = barcode;
        this.price = price;
        this.units = units;
        this.description = description;
        this.category = category;
    }
}

export enum Category {
    A = "A",
    B = "B",
    C = "C"
}
