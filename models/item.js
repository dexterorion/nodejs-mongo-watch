var mongoose = require("mongoose");
var updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;
mongoose.plugin(updateIfCurrentPlugin);

var itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var Item = module.exports = mongoose.model("item", itemSchema);

module.exports.get = function(callback, limit) {
    Item.find(callback).limit(limit);
};
