const mongoose = require('mongoose');


const problemSchema = new mongoose.Schema({
    problem_name:[{type:String, required:true,minLength:1,maxLength:50}],
    category_id:{type:mongoose.Schema.Types.ObjectId,ref:"category",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Problem = mongoose.model("problem",problemSchema);

module.exports = Problem;