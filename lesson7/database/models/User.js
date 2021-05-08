const { Schema, model } = require('mongoose');

// const carSubSchema = {
//     model: { type: String },
//     price: { type: Number }
// }

const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true, default: 15 },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    // cars: [carSubSchema]
    cars: [{ type: Schema.Types.ObjectId }]
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('userCars', {
    ref: 'Car',
    localField: 'cars',
    foreignField: '_id'
});

userSchema
    .pre('find', function() {
        this.populate('userCars');
    })
    .pre('findOne', function() {
        this.populate('userCars');
    });

userSchema.virtual('full_name_age').get(function() {
    return `${this.name} ${this.age}`
})


module.exports = model('User', userSchema);