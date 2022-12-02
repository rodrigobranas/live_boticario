import IClock from "./IClock";

export default class  Clock implements IClock {
	getDate(): Date {
		return new Date();
	}

}
