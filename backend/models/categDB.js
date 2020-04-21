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

  static getAll(){
    return new Promise((resolve, reject) => {
      Categ.find().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  static getAllNames() {
    return new Promise((resolve, reject) => {
      Categ.find({},  {_id: 0, ongs: 0, __v: 0}).then((results) => {
        let resultVector = [];
        if(results !== undefined){
          for(let i = 0; i < results.length; i++){
            resultVector.push(results[i].name);
          }
        }
        resolve(resultVector);
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
    return new Promise((resolve, reject) => {
      const receivedName = receivedData.name;
      Categ.findOneAndDelete({ name: receivedName }).then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  }

  static categorize(receivedData) {
    return new Promise(async (resolve, reject) => {
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

  static searchCategsWithOng(receivedData) {
    return new Promise((resolve, reject) => {
      let id = receivedData.ongId;
      Categ.find({ ongs: id }, {_id: 0, ongs: 0, __v: 0}).then((results) => {
        let resultVector = [];
        if(results){
          for(let i = 0; i < results.length; i++){
            resultVector.push(results[i].name);          }
        }
        resolve(resultVector);
      }).catch((error) => {
        console.log(error);
        reject(error);
      })
    })
  }

  static searchOngsWithCategs(categs) {
    return new Promise((resolve, reject) => {
      Categ.aggregate(
        [{
          $match: {
            name: {$in: categs}
          }
        }, {
          $project: {
            ongs: 1
          }
        }
        ]).then((results) => {
          let aux = [];
          if(results !== undefined){
            for (let i = 0; i < results.length; i++){
              let current = results[i].ongs;
                for (let j = 0; j < current.length; j++){
                  current[j] = current[j].toString();
                }
              aux = [...aux, ...current];
            }
          }
          let unique = (aux) => aux.filter((v,i) => aux.indexOf(v) === i);
          
          let finalResult = unique(aux);
          resolve(finalResult);
        }).catch((error) =>{
          console.log(error);
          reject(error);
        });
    })
  }

}

module.exports = CategActions