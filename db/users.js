const {v4:uuid} = require("uuid");

const userdata = {
    "users":[
        {
            id:uuid(),
            username:"Samuel Masih",
            password:"Samuel@321",
            emailId:"sm@gmail.com",
        },
        {
            id:uuid(),
            username:"Samuel Masih1",
            password:"Samuel1@321",
            emailId:"sm1@gmail.com",
        }
    ]
}
module.exports = userdata;