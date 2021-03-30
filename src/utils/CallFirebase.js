import { db } from './Config'

export const writeData = (userId, value) => {
    db.ref('users/' + userId).set({
		name: value.name,
		numberPhone: value.numberPhone,
		department : value.department
    });
}
export const readUsers = () => {
	return db.ref('users').get();
}


export const writeOrders = (orderId, value) => {
    db.ref('orders/' + orderId).set({
		idUser: value.id,
		date: JSON.stringify(value.date),
		status: value.status
    });
}
export const readOrders = () => {
	return db.ref('orders').get();
}

