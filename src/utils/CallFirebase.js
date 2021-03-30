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


