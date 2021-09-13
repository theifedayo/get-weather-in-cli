const axios = require('axios');




class NetworkHandler{
	constructor(url) {
		this.url = url;
	}

	async getData(url){
		try{
			let response = await axios.get(url);
			if(response.status == 200){
				let data = response.data;
				return data;
			}
		}catch(err){
			console.log(err)
			console.log('An error occured! Check your network connection 📶');
		}	
	}
}


module.exports = {
    NetworkHandler: NetworkHandler
};