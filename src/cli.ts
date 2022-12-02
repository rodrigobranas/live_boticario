import axios from "axios";
import pgp from "pg-promise";
import CalculateInvoice from "./CalculateInvoice";
import Clock from "./Clock";
import CurrencyGateway from "./CurrencyGateway";
import PurchaseData from "./PurchaseData";

process.stdin.on("data", async function (chunk) {
	const command = chunk.toString().replace(/\n/, "");
	const [operation, params] = command.split(" ");
	if (operation === "get-invoice") {
		const currencyGateway = new CurrencyGateway();
		const purchaseData = new PurchaseData();
		const clock = new Clock();
		const calculateInvoice = new CalculateInvoice(currencyGateway, purchaseData, clock);
		const output = await calculateInvoice.execute(params);
		console.log(output);
	}
});
