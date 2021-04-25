const { Schema, model } = require('mongoose');


const carSchema = new Schema({
    model: { type: String },
    price: { type: Number }
}, { toObject: { virtual: true }, toJSON: { virtual: true } });


module.exports = model('Car', carSchema);