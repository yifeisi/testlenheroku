const express = require('express');
const app = express();
const router = express.Router(); //chi ra duong dan 
const AccountModel = require('./models/account');



router.get('/',(req, res, next) => {
    AccountModel.find({
    })
    .then(function(data){
        res.json(data);
    })
    .catch(function(err){
        res.status(500).json('loi server');
    })
  })
router.post('/',(req, res, next) => {
    //res.json('router1 aa post ' + req.body.username + req.headers.quang)
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.create({
        username: username,
        password: password
    })
    .then(function(data){
        res.json('tao tai khoan thanh cong');
    })
    .catch(function(err){
        res.status(500).json('tao tai khoan that bai');
    })
})
router.put('/:id',(req, res, next) => {
    var id = req.params.id;
    var newpassword = req.body.newpassword;
    AccountModel.findByIdAndUpdate(id,{
        password: newpassword
    })
    .then(function(data){
        res.json('update thanh cong');
    })
    .catch(function(err){
        res.status(500).json('loi server');
    })
})
router.delete('/:id',(req, res, next) => {
    var id = req.params.id;
    AccountModel.deleteOne({
        _id: id
    })
    .then(function(data){
        res.json('xoa thanh cong');
    })
    .catch(function(err){
        res.status(500).json('loi server');
    })
})

router.post('/register',(req, res, next) => {
    //res.json('router1 aa post ' + req.body.username + req.headers.quang)
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.findOne({
        username: username
    }).then(function(data){
        if(data){
            res.json('user da ton tai');
        }else{
            return AccountModel.create({
                username: username,
                password: password
            })
        }
        
    })
    .then(function(data){
        res.json('tao tai khoan thanh cong');
    })
    .catch(function(err){
        res.status(500).json('tao tai khoan that bai');
    })
})
router.post('/login',(req, res, next) => {
    //res.json('router1 aa post ' + req.body.username + req.headers.quang)
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.findOne({
        username: username,
        password: password
    }).then(function(data){
        if(data){
            res.json('dang nhap thanh cong');
        }else{
            res.json('dang nhap that bai');
        }   
    })
    .catch(function(err){
        res.status(500).json('co loi ben server');
    })
})

router.get('/product',(req, res) => {
    res.json('router1 product ')
  })
router.get('/cart',(req, res) => {
    res.json('router1 cart ')
  })
router.get('/:id',(req, res) => {
    res.json('router1 cart ' + req.params.id)
  })

module.exports = router