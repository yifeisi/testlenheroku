const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/K5_nodeDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    });

const Schema = mongoose.Schema;
const account = new Schema({
    username: String,
    password: String,
    }, {
            collection: 'Acount'
    }
);
const AccountModel = mongoose.model('account', account);
module.exports = AccountModel;