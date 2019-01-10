import {OrderProduct} from "./orderProduct.model";
export class Order {
	idOrder: string;
	idUser: string;
	orderProducts: OrderProduct[];
	date: Date;
}
