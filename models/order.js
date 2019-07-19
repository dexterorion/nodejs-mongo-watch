var mongoose = require("mongoose");
var updateIfCurrentPlugin = require('mongoose-update-if-current').updateIfCurrentPlugin;
mongoose.plugin(updateIfCurrentPlugin);

var orderSchema = mongoose.Schema({
    items: [orderItemSchema],
    update_date: {
        type: Date,
        default: Date.now
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var orderItemSchema = mongoose.Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

var Order = module.exports = mongoose.model("order", orderSchema);

module.exports.get = function(callback, limit){
    Order.find(callback).limit(limit);
};