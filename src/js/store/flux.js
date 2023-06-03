const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [
				
                
			],
			newContact: [],
				
			
		},
		actions: {
			// Use getActions to call a function within a fuction
            handleContact: (contactToAdd)=>{
				const store = getStore();
				setStore({newContact: [...store.newContact, contactToAdd]})
				console.log(store.newContact)
			},

			addAContact: async() => {
			const response = await fetch("assets.breatheco.de/apis/fake/contact/",{
			methods: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newContact)
	     	});
			 setStore({contacts: data.contacts})
			},
			
			getAllContacts: async () => {
				console.log("the fetch")
				const response = await fetch("assets.breatheco.de/apis/fake/contact/agenda/agenda_M")
				console.log("response", response);
				const data = await response.json().
				console.log(data);
				console.log("data should be here");
				if (response.ok){
					setStore({contacts: data})
					console.log(data)
				};
				console.log(store.contacts)
				
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		
		}
	};
};

export default getState;
