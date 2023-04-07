const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : [
				{id:1 ,name: "Fred", phone: 123}, 
				{id:2 ,name: "James", phone:345}, 
				{id:3 ,name: "Hanna", phone:456}, 
				{id:4 ,name: "Lisa", phone:567}
			]
				
			
		},
		actions: {
			// Use getActions to call a function within a fuction

			addAContact: () => {

			},
			
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
		
		}
	};
};

export default getState;
