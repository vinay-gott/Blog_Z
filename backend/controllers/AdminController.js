const mongoose=require("mongoose")
const EmployeeModel=require("../models/EmployeeModel.model")

async function addHR(req,res){
    const {email,password,empId,mobileNumber,department,role} = req.body;

    if (!email || !password || !mobileNumber||!empId||!department||!role) {
        return res.status(400).send({ message: 'Please fill all the fields' });
    }
    if(role!="hr")
        return res.status(404).send({message:"Please add HR roles only"})
    try{
    const id=req.body.empId
    const emp=await EmployeeModel.findOne({empId:id})
    if(emp){
        return res.status(404).send({message:"HR with this id already exists"})
    }
    else{
        const emps=new EmployeeModel({email,password,empId,mobileNumber,department,role});
        emps.save();
        res.status(200).send("New HR added");
    }
}
catch(err){
    console.log({message:err})
}
}

async function deleteHR(req,res){
    const emp=await EmployeeModel.findOne({empId:req.params.id})
    if(!emp && emp.role!="hr"){
        return res.status(404).send('HR not found');
    }
    else{
        const j=await EmployeeModel.deleteOne({empId:req.params.id});
        console.log(j)
        res.status(200).send("HR deleted successfully")
    }
}

async function getEmpHR(req,res){
    try {
      const employees = await EmployeeModel.find({ role: { $in: ['hr', 'employee'] } });
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports={getAllHR,updateHR,addHR,deleteHR,getEmpHR};