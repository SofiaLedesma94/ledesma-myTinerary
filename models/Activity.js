const mongoose = require('mongoose')

const activitySchema= new mongoose.Schema(
    {
        activities: [{activityImage:String, activityTitle:String,}],
    }
)


const Activity = mongoose.model('activity',activitySchema)
module.exports =Activity