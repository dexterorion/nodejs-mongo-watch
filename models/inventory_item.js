var mongoose = require("mongoose");
var updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;
mongoose.plugin(updateIfCurrentPlugin);

var inventoryItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

var InventoryItem = module.exports = mongoose.Model("inventoryItem", inventoryItemSchema);

module.exports.get = function(callback, limit) {
    InventoryItem.find(callback).limit(limit);
};
