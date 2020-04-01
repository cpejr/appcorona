const Ong = require('../../models/ongDB')

module.exports = {
  async create(request, response) {
    let { name, cnpj } = request.body;
    //Validation if ong alredy exists

    //

    let body = request.body;
    let ong = {
      name: body.name,
      cnpj: body.cnpj,
      state: body.state,
      city: body.city,
      neighborhood: body.neighborhood,
      street: body.street,
      number: body.number,
      complement: body.complement,
      picpay: body.picpay,
      facebook: body.facebook,
      whatsapp: body.whatsapp,
      email: body.email,
      site: body.site,
      agencia: body.agencia,
      banco: body.banco,
      appoved: false
    }

    let { _id } = await Ong.createNew(ong);

    return response.json({ _id });
  },
  async index(request, response) {

  },
  async update(request, response) {

  },
  async delete(request, response) {

  }
};