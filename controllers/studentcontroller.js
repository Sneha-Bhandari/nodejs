//assignments
//studentdetail 
const getAllStudent = (req,res)=>{
    res.json({message: "get all Student details"})
}

const getStudentById = (req,res)=> {
    res.json({message:`details of students by ID ${req.params.id} is found`})
}

const updateStudent = (req, res)=>{
    res.json({message: `Students with ${req.params.id} is updated`})
}

const deleteStudent = (req, res)=>{
    res.json({message: `Students with ${req.params.id} is deleted`})
}

module.exports={
    getAllStudent,
    getStudentById,
    updateStudent,
    deleteStudent
}