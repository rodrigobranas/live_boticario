import axios from "axios";
import express from "express";
import pgp from "pg-promise";
import CalculateInvoice from "./CalculateInvoice";
import Clock from "./Clock";
import CurrencyGateway from "./CurrencyGateway";
import PurchaseData from "./PurchaseData";
const app = express();

app.get("/cards/:cardNumber/invoices", async function (req, res) {
	const currencyGateway = new CurrencyGateway();
	const purchaseData = new PurchaseData();
	const clock = new Clock();
	const calculateInvoice = new CalculateInvoice(currencyGateway, purchaseData, clock);
	const output = await calculateInvoice.execute(req.params.cardNumber);
	res.json(output);
});

app.listen(3000);