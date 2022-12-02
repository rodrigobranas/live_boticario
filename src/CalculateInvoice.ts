import axios from "axios";
import pgp from "pg-promise";
import CurrencyGateway from "./CurrencyGateway";
import IClock from "./IClock";
import ICurrencyGateway from "./ICurrencyGateway";
import Invoice from "./Invoice";
import calculate from "./InvoiceCalculator";
import IPurchaseData from "./IPurchaseData";
import PurchaseData from "./PurchaseData";

export default class CalculateInvoice {

	constructor (
		readonly currencyGateway: ICurrencyGateway,
		readonly purchaseData: IPurchaseData,
		readonly clock: IClock
	) {
	}

	async execute (cardNumber: string) {
		const today = this.clock.getDate();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const currencies = await this.currencyGateway.getCurrencies();
		const purchases = await this.purchaseData.getPurchases(cardNumber, month, year);
		const invoice = new Invoice(purchases, currencies);
		const total = invoice.getTotal();
		// const total = calculate(purchases, currencies);
		return {
			total
		};
	}
}