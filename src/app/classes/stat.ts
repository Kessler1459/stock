import { Category } from "./product";

export class Stat {
    optimalCategory: Category;
    optimalQuantity: number;
    reorder: number;
    dailyDemand: number;//promedio
    annualConsumption:number;//costo anual valorizado
    demandDispersion:number;
}
