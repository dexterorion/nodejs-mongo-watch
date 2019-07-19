Item = require("../models/item");

exports.index = function(req, res) {
    Contact.get(function(err, items){
        if (err) {
            req.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Items retrieved successfully!",
            data: items
        });
    });
};

exports.new = function(req, res) {
    var item = new Item();
    item.name = req.body.name? req.body.name : item.name;
    item.price = req.body.price? req.body.price : item.price;

    item.save(function(err){
        if (err) {
            res.json(err);
        }
        res.json({
            message: "New item created!",
            data: item
        });
    });
};

exports.view = function(req, res) {
    Item.findById(req.params.item_id, function(err, item){
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Item details loading...",
            data: item
        });
    });
};

exports.update = function(req, res) {
    Item.findById(req.params.item_id, function(err, item){
        if (err) {
            res.send(err);
        }
        
        item.name = req.body.name? req.body.name : item.name;
        item.price = req.body.price? req.body.price : item.price;

        Item.save(function(err){
            if (err) {
                res.send(err);
            }
            res.json({
                message: "Item info updated",
                data: item
            });
        });
    });
};

exports.delete = function(req, res) {
    Item.remove({
        _id: req.params.item_id
    },function(err, contact){
        if (err) {
            res.send(err);
        }
        res.json({
            message: "Item deleted",
            status: "success"
        });
    });
};
