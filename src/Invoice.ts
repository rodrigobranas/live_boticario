import Purchase from "./Purchase";

export default class Invoice {
	purchases: Purchase[];

	constructor (purchases: Purchase[], readonly currencies: any) {
		this.purchases = purchases;
	}

	getTotal () {
		let total = 0;
		for (const purchase of this.purchases) {
			if (purchase.currency === "USD") {
				total += purchase.amount * this.currencies.usd;
			} else {
				total += purchase.amount;
			}
		}
		return total;
	}
}