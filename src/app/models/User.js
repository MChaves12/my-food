const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true,
        trim: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6,
        
    }
}, {timestamps: true});

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports = model('User', UserSchema);