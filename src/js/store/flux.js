const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [ {id:"4603",agenda_slug:"agenda_M",full_name:"Dave Bradley",email:"dave@gmail.com",phone:"7864445566",address:"47568 NW 34ST, 33434 FL, USA"}
				
                
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

			addAContact: async(newestContact) => {
			const response = await fetch("assets.breatheco.de/apis/fake/contact/",{
			methods: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newestContact)
	     	});
			
			},
			
			getAllContacts: async () => {
				console.log("the fetch")
				const response = await fetch("assets.breatheco.de/apis/fake/contact/agenda/agenda_M")
				console.log("response", response);
				
				console.log("XXXXXXXXXXX")
				console.log("Error with response", response.statusText);
				
				if (response){
					const data = await response.json();
					console.log(data)
					console.log("data should be here")
					const store = getStore();
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
