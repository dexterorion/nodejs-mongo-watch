let router = require("express").Router();

var itemController = require("../controllers/item");

router.route("/items")
    .get(itemController.index)
    .post(itemController.new);

router.route("/items/:item_id")
    .get(itemController.view)
    .patch(itemController.update)
    .put(itemController.update)
    .delete(itemController.delete);

module.exports = router;