import axios from "axios";
import CalculateInvoice from "../src/CalculateInvoice";
import Clock from "../src/Clock";
import IClock from "../src/IClock";
import ICurrencyGateway from "../src/ICurrencyGateway";
import IPurchaseData from "../src/IPurchaseData";
import PurchaseData from "../src/PurchaseData";

test("Deve testar a totalização da fatura do cartão do mês atual", async function () {
	const currencyGateway: ICurrencyGateway = {
		async getCurrencies (): Promise<any> {
			return {
				"usd": 2
			}
		}
	}
	const purchaseData: IPurchaseData = {
		async getPurchases (cardNumber: string, month: number, year: number): Promise<any> {
			return [
				{ amount: 1000, currency: "BRL" },
				{ amount: 1000, currency: "USD" }
			]
		}
	}
	// const purchaseData = new PurchaseData();
	const clock: IClock = {
		getDate: function (): Date {
			return new Date("2022-12-01T10:00:00")
		}
	}
	const calculateInvoice = new CalculateInvoice(currencyGateway, purchaseData, clock);
	const output = await calculateInvoice.execute("1234");
	expect(output.total).toBe(3000);
});
