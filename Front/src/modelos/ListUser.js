const {Schema,model} = require('mongoose');

const ListUser = new Schema({
    
    user:{
        type: "string",
        required: true
    },
    p:{
        type: "string",
        required: true
    },
    email:{
        type: "email",
        required: true
    },
    rol:{
        type: "string",
        required:true
    }
});

ListUser.pre("save", async function(next) {
    const salt = await genSalt(10);
    console.log(salt);
    this.p= await hash(this.p, salt);
    next();
});

const ListUser = model("lista",ListUser);
exports.ListUser=ListUser;