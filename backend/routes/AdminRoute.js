const express=require('express')
const AdminRoutes=express.Router()

AdminRoutes.get('/',e.getEmployee)
AdminRoutes.get('/hr',emp.getAllHR)
AdminRoutes.put('/update/:id',emp.updateHR)
AdminRoutes.post('/add',emp.addHR)
AdminRoutes.delete('/delete/:id',emp.deleteHR)
AdminRoutes.get('/details',emp.getEmpHR)

module.exports=AdminRoutes