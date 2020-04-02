const mongoose = require('mongoose');

const ong = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  complement: {
    type: String,
    required: true
  },
  picpay: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  whatsapp: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  site: {
    type: String,
    required: false
  },
  agencia: {
    type: String,
    required: true
  },
  banco: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    required: false,
    default: false,
  }
},
  { timestamps: true }
);

const Ong = mongoose.model('Ong', ong);

class OngsActions {

  static createNew(ongData) {
    return new Promise((resolve, reject) => {
      Ong.create(ongData).then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static deleteOng(id) {
    return new Promise((resolve, reject) => {
      Ong.deleteOne({ _id: id }).then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static getAprovedOngs() {
    return new Promise((resolve, reject) => {
      Ong.find({ approved: true }).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static getWaitingAprovement() {
    return new Promise((resolve, reject) => {
      Ong.find({ approved: false }).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static filterByCity(target) {
    return new Promise((resolve, reject) => {
      Ong.find({ approved: true, city: target }).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static filterByState(target) {
    return new Promise((resolve, reject) => {
      Ong.find({ approved: true, state: target }).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static update(id, newFields) {
    return new Promise((resolve, reject) => {
      Ong.findOneAndUpdate({ _id: id }, newFields).then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
        console.log(error);
      });
    });
  }

  static checkExistence(targetName, targetCNPJ) {
    return new Promise((resolve, reject) => {
      Ong.find({ $or: [{ name: targetName }, { cnpj: targetCNPJ }] }).then((result) => {
        if (result.length > 0)
          resolve(true);
        else
          resolve(false);
      }).catch((error) => {
        reject(error);
        resolve(error);
      });
    });
  }

}

module.exports = OngsActions;