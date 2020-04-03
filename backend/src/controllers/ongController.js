const Ong = require('../../models/ongDB')

module.exports = {
  async create(request, response) {
    try {
      let { name, cnpj } = request.body;
      const exist = await Ong.checkExistence(name, cnpj)
      console.log(exist);
      if (!exist) {
        let ong = request.body;

        let { _id } = await Ong.createNew(ong);

        return response.json({ _id });
      }
      else {
        return response.status(409).json({ error: 'Ong já existente' });
      }
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
  async index(request, response) {
    try {
      const { page, city, state } = request.query;

      let result = await Ong.getAprovedOngs(page, city, state);

      return response.json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
  async delete(request, response) {
    try {
      let id = request.params.ongId;

      let result = await Ong.deleteOng(id);

      return response.json({ object: result, message: 'deletado com sucesso' });
    } catch (error) {
      if (error.name === "CastError") {
        return response.status(400).json({ error: error });
      }

      console.log(error);
      return response.status(500).json({ error: error });
    }
  }
};