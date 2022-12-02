import axios from "axios";
import ICurrencyGateway from "./ICurrencyGateway";

export default class CurrencyGateway implements ICurrencyGateway {
	async getCurrencies () {
		const response = await axios.get("http://localhost:3001/currencies");
		const currencies = response.data;
		return currencies;
	}
}