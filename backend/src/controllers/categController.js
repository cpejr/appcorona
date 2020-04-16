const Categ = require('../../models/categDB');
const Ong = require('../../models/ongDB');

module.exports = {

    async index(request, response) {
        try {
            let result = await Categ.getAll();
            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

    async create(request, response) {
        try {
            let data = request.body;
            let result = await Categ.createNew(data);
            
            return response.json(result);

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

    async categorize(request, response) {
        try {
            let data = request.body;
            let result = await Categ.categorize(data);

            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

    async delete(request, response) {
        try {
            let data = request.body;
            let result = await Categ.deleteOne(data);

            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

}