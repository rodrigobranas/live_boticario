export default class Purchase {
	constructor (readonly cardNumber: string, readonly softDescription: string, readonly amount: number, readonly date: Date, readonly currency: string) {
	}
}
