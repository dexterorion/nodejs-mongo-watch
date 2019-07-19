var mongoose = require("mongoose");
var updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;
mongoose.plugin(updateIfCurrentPlugin);

var contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model("contact", contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
};