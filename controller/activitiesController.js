const Activity = require('../models/Activity')

const activitiesController ={
    addActivity : async (req, res) =>{
      const {activities} =req.body
      const agregarActivity= new Activity({
        activities
    })
    agregarActivity.save()
      .then(activityAgregada=>{
          return res.json({success:true, respuesta:activityAgregada})
      })
      .catch(error=>{
          return res.json({success:false, respuesta: error})
      })
    },
    allActivities : async (req,res) =>{
        Activity.find()
        .then(data =>{
            return res.json({respuesta:data})
        })
        .catch(error =>{
            return res.json({respuesta:error})
        })

    }
}

module.exports = activitiesController