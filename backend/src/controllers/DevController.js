const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//no maximo a controller tem 5 metodos => index, show, store, update, destroy

module.exports = {
    //Show all devs
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    //Add a new dev
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
    
        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            //Valor padrao de name é login, se ele nao existir no caso
            const { name = login, avatar_url, bio } = apiResponse.data
        
            console.log(name, avatar_url, bio, github_username);
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };
        
            const dev = await Dev.create({
                github_username : github_username,
                name,
                avatar_url,
                bio,
                techs : techsArray,
                location
            });
        }
    
        return response.json({dev});
    },

    //Show all devs
    async update(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    //Show all devs
    async destroy(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },
}