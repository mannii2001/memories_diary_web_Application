const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    memory_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Memories",
      },
    title:{
        type:String,
        required:[true,"Add The title"]
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model("Comments",commentSchema);