const jwt = require('jsonwebtoken')

const bioModelObj = require('../models/myinfo')
const authModelObj = require('../models/Auth')

const fast2sms = require('fast-two-sms')

const contactMe = async (req, res) => {
    try {
        console.log("Correct")
        //res.send("new message Sent")
        var From = req.body.From
        var Organization = req.body.Organization
        var Email = req.body.Email
        var Phone = req.body.Phone
        var Message = req.body.Message
        console.log("From-->", From)
        console.log("msg-->", Message)
        // var From = "BoldTek"
        // var msg="Got your number from your portfolio"
        const response = await fast2sms.sendMessage({
            authorization: 'yLEiYO1srevPZcA8NKt7TRgUflh9bIWMw5Vm4pjFqnHkz0od6Q4CNiWR1YgZhBIroEO7dwAtJu9xzqsj',
            message: '\n' + From + '\n' + Organization + '\n' + Email + '\n' + Phone + '\n' + Message,
            numbers: ['9085895248']
        }) //Asynchronous Function.
        res.send(response)
    } catch (err) {
        console.log(err);
    }
}

const bio = async (req, res) => {
    const bioInfo = {
        bio: req.body.bio,
        hobby: req.body.hobby,
        info: req.body.info,
        exp: req.body.exp,
        lang: req.body.lang,
        databases: req.body.databases,
        devtools: req.body.devtools,
        projmgttools: req.body.projmgttools
    }
    console.log(bioInfo)
    bioModelObj.create(bioInfo)
    res.send("Data inserted")
}

const getAllData = async (req, res) => {
    await bioModelObj.find({}, (err, allData) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!allData) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: allData })
    }).catch(err => console.log(err))
}

// login = async (req, res) => {
//     const authInfo = {
//         username: req.body.username,
//         password: req.body.password
//     }
//     authModelObj.create(authInfo)
//     res.send("Data inserted")
// }


process.env.SECRET_KEY = 'SECRET'
login = (req, res) => {
    authModelObj.findOne({ username: req.body.username }).then(existedUser => {
        if (existedUser) {
            // Normal check
            if (req.body.password === existedUser.password) {
                //generate token while login successful
                const payload = {
                    username: existedUser.username
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                    expiresIn: "1h"
                })
                console.log(token)
                res.send(token)
                //  res.json({ message: 'login successful' })
            } else {
                // Passwords don't match
                console.log("passwork mis")
                res.json({ error: 'password mismatch' })
            }
        } else {
            console.log("email miss")
            res.json({ error: 'username not match' })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
}

module.exports = {
    contactMe,
    bio,
    getAllData,
    login,
}