const mongoose = require("mongoose");

const memoriesSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    title:{
        type:String,
        required:[true,"Add The title"]
    },
    date:{
        type:String,
        required:[true,"Add the date"]
    },
    description:{
        type:String,
        required:[true,"Add the description"]
    }
},
{
    timestamps:true,
})

module.exports = mongoose.model("Memories",memoriesSchema);