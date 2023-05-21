const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
				// {
				// 	id: 1,
				// 	full_name: "Pedro Perez",
				// 	email: "pedroperez@gmail.com",
				// 	phone: "+58 7654321",
				// 	address: "Zulia"
				// },
				// {
				// 	id: 2,
				// 	full_name: "Maria Gonzalez",
				// 	email: "mg@gmail.com",
				// 	phone: "+58 3219870",
				// 	address: "Merida"
				// }
			],

			contId: 2
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: async () => {
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/proyecto_de_yarumis");
					let data = await resp.json();
					setStore({ contactos: data });
				} catch (err) {
					console.log(err);
				}
			},

			newContact: async newItem => {
				const auxStore = getStore();
				// setStore({ contId: auxStore.contId + 1 });
				// newItem.id = auxStore.contId;
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ ...newItem, agenda_slug: "proyecto_de_yarumis" })
					});
					let data = await resp.json();
					setStore({
						contactos: [...auxStore.contactos, data]
					});
					alert("Contacto agregado!");
				} catch (err) {
					console.log(err);
				}
			},

			removeContact: async contactodelete => {
				const store = getStore();
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contactodelete.id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
				} catch (err) {
					console.log(err);
				}

				getActions().getContacts();
				// setStore({
				// 	contactos: store.contactos.filter(contacto => contacto.id != contactodelete.id)
				// });
			},

			editContact: async contactoEditado => {
				const store = getStore();
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contact/" + contactoEditado.id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({ ...contactoEditado, agenda_slug: "proyecto_de_yarumis" })
					});
					if (resp.status == 200) {
						getActions().getContacts();
					} else alert("No se ha podido editar el contacto!");
				} catch (error) {
					console.log(err);
				}
				// const nuevosContactos = store.contactos.map(contacto => {
				// 	if (contacto.id == contactoEditado.id) {
				// 		return contactoEditado;
				// 	} else return contacto;
				// });
				// setStore({
				// 	contactos: nuevosContactos
				// });
			}
		}
	};
};

export default getState;
