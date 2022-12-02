import Purchase from "./Purchase";

export default interface IPurchaseData {
	getPurchases (cardNumber: string, month: number, year: number): Promise<Purchase[]>;
}
