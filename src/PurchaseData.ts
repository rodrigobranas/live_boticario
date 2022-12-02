import pgp from "pg-promise";
import IPurchaseData from "./IPurchaseData";
import Purchase from "./Purchase";

export default class PurchaseData implements IPurchaseData {
	async getPurchases (cardNumber: string, month: number, year: number): Promise<Purchase[]> {
		const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
		const purchasesData = await connection.query("select * from branas.purchase where card_number = $1 and extract(month from date) = $2 and extract(year from date) = $3", [cardNumber,  month, year]);
		const purchases: Purchase[] = [];
		for (const purchaseData of purchasesData) {
			purchases.push(new Purchase(purchaseData.card_number, purchaseData.soft_description, parseFloat(purchaseData.amount), purchaseData.date, purchaseData.currency));
		}
		return purchases;
	}
}