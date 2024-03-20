
const mongoose= require("mongoose");

const schema=mongoose.Schema;
let reviewSchema = new schema({ 

comment :{type: String,
required: true},  



rating:{
    type: Number,
    min:0,
    max:5,

},
     createdAt:{
        type: Date,
        default: Date.now(),
     },

     author:{
        type: schema.Types.ObjectId,
         ref:"user",
     }


});

const review= mongoose.model("review", reviewSchema);
module.exports =review;