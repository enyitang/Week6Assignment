const mongoose = require("mongoose")


const invenTory = new mongoose.Schema({

    Product: {type: String, require},

    Brand: {type: String, require},

    Quality: {type: String, require},

    Manufacturer: {type: String}
})

const goods = new mongoose.model("Goods", invenTory)

module.exports = goods