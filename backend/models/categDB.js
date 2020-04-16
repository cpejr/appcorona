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

class CategsActions {
  
  static getAll() {
    return new Promise((resolve, reject) => {
      CategModel.find().then((results) => {
        resolve(results);
      }).catch((err) => {
        reject(err);
      });
    });
  }

  static createNew(receivedData) {
    return new Promise((resolve, reject) => {
      const categData = {name: receivedData.name, ongs: receivedData.ongs ? receivedData.ongs : []};
      Categ.create(categData).then((result) =>{
        resolve(result);
      }).catch((error) =>{
        console.log(error);
        reject(error);
      });
    })
  }

  static addOng(categName, receivedOng) {
    return new Promise((resolve, reject) => {
      let id = receivedOng._id;
      Categ.findOneAndUpdate({name: categName}, {$push: {ongs: id}}).then((result) =>{
        resolve(result);
      }).catch((error) =>{
        console.log(error);
        reject(error);
      })
    })
  }

  static searchCategsWithOng(receivedOng) {
    return new Promise((resolve, reject) =>{
      let id = receivedOng._id;
      Categ.find({ongs: id}).then((results) => {
        resolve(results);
      }).catch((error) =>{
        console.log(error);
        reject(error);
      })
    })
  }

  static searchOngsWithCategs(receivedCategs) {
    return new Promise((resolve, reject) =>{
      
    })
  }

  


}