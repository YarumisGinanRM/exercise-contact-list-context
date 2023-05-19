const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
				{
					id: 1,
					name: "Yarumis Rodriguez",
					email: "ym@gmail.com",
					phone: "+58 1234567",
					address: "Caracas"
				},
				{
					id: 2,
					name: "Pedro Perez",
					email: "pedroperez@gmail.com",
					phone: "+58 7654321",
					address: "Zulia"
				},
				{
					id: 3,
					name: "Maria Gonzalez",
					email: "mg@gmail.com",
					phone: "+58 3219870",
					address: "Merida"
				}
			],

			contId: 3
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: newItem => {
				const auxStore = getStore();
				setStore({ contId: auxStore.contId + 1 });
				newItem.id = auxStore.contId;
				setStore({
					contactos: [...auxStore.contactos, newItem]
				});
				// console.log(newItem);
				alert("Contacto agregado!");
			},

			removeContact: contactodelete => {
				console.log(contactodelete);
				const store = getStore();
				setStore({
					contactos: store.contactos.filter(contacto => contacto.id != contactodelete.id)
				});
			},

			editContact: contactoEditado => {
				console.log(contactoEditado);
				const store = getStore();
				const nuevosContactos = store.contactos.map(contacto => {
					if (contacto.id == contactoEditado.id) {
						return contactoEditado;
					} else return contacto;
				});
				setStore({
					contactos: nuevosContactos
				});
			}
		}
	};
};

export default getState;
