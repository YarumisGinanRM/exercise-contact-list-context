const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: [
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
			loadProducts: async () => {
				try {
					let resp = await fetch("https://assets.breatheco.de/apis/fake/contactos");
					let data = await resp.json();
					setStore({ contactos: data.map(contactos => {...contacto})});
				} catch (err) {
					console.log(err);
				}

			newContact: newItem => {
					const auxStore = getStore();
					// setStore({ contId: auxStore.contId + 1 });
					// newItem.id = auxStore.contId;
					try {
						let resp = await fetch("https://assets.breatheco.de/apis/fake/contactos", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({ ...newItem, agenda_slug: "Proyecto" })
						});
						let data = await resp.json();
					setStore({
						contactos: [...auxStore.contactos {...data}]
					});
					alert("Contacto agregado!");
					} catch (err) {
						// eslint-disable-next-line no-console
						console.log(err);
					}
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
