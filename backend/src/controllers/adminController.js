const Ong = require('../../models/ongDB')

module.exports = {

  async index(request, response) {
    try {
      let result = await Ong.getWaitingAprovement();

      return response.json(result);
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },

  async update(request, response) {
    try {
      let id = request.params.ongId;
      let updateFields = request.body;

      let result = await Ong.update(id, updateFields);

      return response.json(result);
      
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
}
