import vehicleModel from "../models/vehicle.model"
const getAllVehicles=(res,req)=>{
    const allVehicles=vehicleModel.getAllVehicles()
    if(allVehicles){
        return res
    }
}