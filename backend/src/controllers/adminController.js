const Ong = require('../../models/ongDB')
const emailController = require('./emailController')

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
      

      if (updateFields.approved){
        let ongEmail = await Ong.getById(id).email;
        emailController.userApprovedEmail(ongEmail);
      }

      let result = await Ong.update(id, updateFields);

      return response.json({_id: result._id, message: 'atualizado com sucesso'});

    } catch (error) {
      if (error.name === "CastError") {
        return response.status(400).json({ error: error });
      }

      console.log(error);
      return response.status(500).json({ error: error });
    }
  },
}
