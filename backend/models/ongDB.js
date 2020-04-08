const mongoose = require('mongoose');

const ong = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
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
    type: String,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  complement: {
    type: String,
    required: false
  },
  picpay: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  ddd: {
    type: String,
    required: false
  },
  phoneNumber: {
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
  branch: {
    type: String,
    required: false
  },
  bank: {
    type: String,
    required: false
  },
  bankAccount: {
    type: String,
    required: false
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

// Use this to define the maximum number of ongs in a page
const ONGS_PER_PAGE = 10;

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

  static getAprovedOngs(page, city, state) {
    return new Promise(async (resolve, reject) => {
      try {
        let query = {
          approved: true,
        }

        if (city) {
          query.city = city;
        }

        if (state) {
          query.state = state;
        }

        let pg = 0;

        if (page)
          pg = (page - 1);

        const result = await Ong.aggregate([
          {
            $match: {
              ...query
            }
          },
          {
            $group: {
              _id: null,
              ongs: { $push: '$$ROOT' }
            }
          }, {
            $project: {
              _id: 0,
              totalCount: { $size: '$ongs' },
              ongs: 1
            }
          }, {
            $project: {
              totalCount: 1,
              ongs: { $slice: ['$ongs', pg * ONGS_PER_PAGE, ONGS_PER_PAGE] }
            }
          }
        ]);
        
        resolve(result);
      } catch (err) {
        console.log(err);
        reject(err);
      }
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