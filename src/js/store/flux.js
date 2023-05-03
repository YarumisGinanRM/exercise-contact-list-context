const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
				{
					name: "carlos profesor",
					email: "ym@gmail.com",
					phone: "+58 12345678",
					address: "caracas"
				}
			]
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				const store = getStore();
				setStore({
					contactos: [...store.contactos, newItem]
				});
			}
		}
	};
};

export default getState;
