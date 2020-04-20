const Categ = require('../../models/categDB');
const Ong = require('../../models/ongDB');

module.exports = {

    async index(request, response) {
        try {
            let result = await Categ.getAllNames();
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
            let data = request.params;
            let result = await Categ.deleteOne(data);

            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

    async searchCategs(request, response) {
        try {
            let data = request.params;
            let result = await Categ.searchCategsWithOng(data);

            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

    async searchOngs(request, response) {
        try {
            let { categs } = request.body;
            let result = await Categ.searchOngsWithCategs(categs);
            
            return response.json(result);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: error });
        }
    },

}