const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [
				{id:1 ,name: "Fred", phone: 123}, 
				{id:2 ,name: "James", phone:345}, 
				{id:3 ,name: "Hanna", phone:456}, 
				{id:4 ,name: "Lisa", phone:567}
			],
			addThisContact: {}
				
			
		},
		actions: {
			// Use getActions to call a function within a fuction

			addAContact: async() => {
			const response = await fetch(assets.breatheco.de/apis/fake/contact/{
			methods: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(store.newContact)
	     	});
			},
			
			getAllContacts: async () => {
				const response = await fetch(assets.breatheco.de/apis/fake/contact/agenda)
				const data = await response.json();
				setStore({contacts: data.contacts})
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		
		}
	};
};

export default getState;
