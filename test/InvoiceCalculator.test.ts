import Invoice from "../src/Invoice";
import calculate from "../src/InvoiceCalculator";
import Purchase from "../src/Purchase";

test("Deve testar a fatura", function () {
	const purchases = [
		new Purchase("1234", "Amazon", 1000, new Date(), "BRL"),
		new Purchase("1234", "Amazon", 1000, new Date(), "USD")
	]
	const currencies = {
		"usd": 2
	}
	const total = calculate(purchases, currencies);
	expect(total).toBe(3000);
});
