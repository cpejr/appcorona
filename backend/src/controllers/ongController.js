const Ong = require('../../models/ongDB')

module.exports = {
  async create(request, response) {
    try {
      let { name, cnpj } = request.body;
      const exist = await Ong.checkExistence(name, cnpj)
      if (!exist) {
        let ong = request.body;

        let { _id } = await Ong.createNew(ong);

        return response.json({ _id });
      }
      else {
        //Ong Already exists
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
  async index(request, response) {
    try {
      let result = await Ong.getAprovedOngs();

      return response.json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
  async delete(request, response) {
    try {
      let { id } = request.params.ongId;

      let result = await Ong.deleteOng(id);

      return response.json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  }
};