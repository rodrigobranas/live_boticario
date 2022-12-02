export default function calculate (purchases: any, currencies: any) {
	let total = 0;
		for (const purchase of purchases) {
			if (purchase.currency === "USD") {
				total += purchase.amount * currencies.usd;
			} else {
				total += purchase.amount;
			}
		}
		return total;
}
