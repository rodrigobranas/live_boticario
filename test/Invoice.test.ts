import Invoice from "../src/Invoice";
import Purchase from "../src/Purchase";

test("Deve testar a fatura", function () {
	const purchases = [
		new Purchase("1234", "Amazon", 1000, new Date(), "BRL"),
		new Purchase("1234", "Amazon", 1000, new Date(), "USD")
	]
	const currencies = {
		"usd": 2
	}
	const invoice = new Invoice(purchases, currencies);
	const total = invoice.getTotal();
	expect(total).toBe(3000);
});
