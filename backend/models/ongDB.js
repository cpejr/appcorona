const mongoose = require('mongoose');
const Categ = require('./categDB');

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
  },
  imageSrc: {
    type: String,
    required: true,
  },
  categs: {
    type: String,
    required: false,
  }
},
  { timestamps: true }
);

const Ong = mongoose.model('Ong', ong);

// Use this to define the maximum number of ongs in a page
const ONGS_PER_PAGE = 10;

class OngActions {

  static createNew(ongData) {
    return new Promise((resolve, reject) => {
      Ong.create(ongData).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  static deleteOng(id) {
    return new Promise((resolve, reject) => {
      Ong.deleteOne({ _id: id }).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      Ong.findById(id).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }


  static getAprovedOngs(page, city, state, name, categs) {
    return new Promise(async (resolve, reject) => {
      try {

        let query = {
          approved: true,
        }

        if (city)
          query.city = toApproximationRegex(city);

        if (state)
          query.state = state;

        if (name)
          query.name = toApproximationRegex(name);

        let pg = 0;

        if (page)
          pg = (page - 1);

        if (categs !== undefined) {
          let ongIds = await Categ.searchOngsWithCategs(categs);
          if (ongIds.length >= 0) {
            for (let i = 0; i < ongIds.length; i++) {
              ongIds[i] = mongoose.Types.ObjectId(ongIds[i]);
            }
            query._id = { $in: ongIds };
          }
        }

        const result = await Ong.aggregate([
          {
            $match: {
              ...query,
            }
          }, {
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
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  static getWaitingAprovement() {
    return new Promise((resolve, reject) => {
      Ong.find({ approved: false }).then((results) => {
        resolve(results);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
  }

  static update(id, newFields) {
    return new Promise((resolve, reject) => {
      Ong.findOneAndUpdate({ _id: id }, newFields).then((results) => {
        resolve(results);
      }).catch((error) => {
        console.log(error);
        reject(error);
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
        console.log(error);
        reject(error);
      });
    });
  }

  static getTotalApprovedOngs(city, state, name, categs) {

    return new Promise(async (resolve, reject) => {
      try {

        let query = {
          approved: true,
        }

        if (city)
          query.city = toApproximationRegex(city);

        if (state)
          query.state = state;

        if (name)
          query.name = toApproximationRegex(name);

        if (categs !== undefined) {
          let ongIds = await Categ.searchOngsWithCategs(categs);
          if (ongIds.length >= 0) {
            for (let i = 0; i < ongIds.length; i++) {
              ongIds[i] = mongoose.Types.ObjectId(ongIds[i]);
            }
            query._id = { $in: ongIds };
          }
        }

        const result = await Ong.countDocuments(query);

        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}


function toApproximationRegex(string) {
  const words = string.split(' ');

  let regex = ''

  words.forEach(word => {
    regex += `(?=.*${word})`
  });

  return { $regex: regex, $options: 'i' }
}

module.exports = OngActions;
