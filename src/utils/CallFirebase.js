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


export const writeOrders = (value) => {
    db.ref('orders/' + value.idOrder).set({
		idUser: value.idUser,
		date: JSON.stringify(value.date),
		status: value.status
    });
}
export const readOrders = () => {
	return db.ref('orders').get();
}

