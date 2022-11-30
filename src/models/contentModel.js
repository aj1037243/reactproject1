const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
},
    description: {
    type: String,
    required: true
},
    pictureURL: {
    type: String,
    required: true
},
    address: {
    type: String,
       required: true
}
})

const Content = mongoose.model("Content", contentSchema);
module.exports = Content;
