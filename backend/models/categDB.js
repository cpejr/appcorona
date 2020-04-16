const mongoose = require('mongoose');

const categSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ongs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ong'
  }],
});

const Categ = mongoose.model('Categ', categSchema);

class CategActions {

  static getAll() {
    return new Promise((resolve, reject) => {
      Categ.find().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  static createNew(receivedData) {
    return new Promise((resolve, reject) => {
      const categData = { name: receivedData.name, ongs: receivedData.ongs ? receivedData.ongs : [] };
      Categ.create(categData).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    })
  }

  static deleteOne(receivedData) {
    return new Promise((resolve, reject) =>{
      const receivedName = receivedData.name;
      Categ.findOneAndDelete({name: receivedName}).then((result) =>{
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  }

  static categorize(receivedData) {
    return new Promise(async (resolve, reject) => {
      console.log(receivedData);
      let ongId = receivedData.ong._id;
      let categ = receivedData.categ;
      let promises = [];

      for (let i = 0; i < categ.length; i++) {
        let actualCateg = categ[i];
        promises.push(
          Categ.findOneAndUpdate({ name: actualCateg }, { $push: { ongs: ongId } })
        );
      }
      let results = await Promise.all(promises);
      resolve(results);
    }).catch((error) => {
      console.log(error);
      reject(error);
    })
  }


  static searchCategsWithOng(receivedOng) {
    return new Promise((resolve, reject) => {
      let id = receivedOng._id;
      Categ.find({ ongs: id }).then((results) => {
        resolve(results);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  }

  static searchOngsWithCategs(receivedCategs) {
    return new Promise((resolve, reject) => {

    })
  }

}

module.exports = CategActions