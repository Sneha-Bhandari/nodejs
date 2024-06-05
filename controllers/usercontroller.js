const db= require("../config/db.js")


const getAllUser = async(req,res)=>{
try{
    let sqlQuery = "SELECT * from student";
    const [data] = await db.query(sqlQuery)
   res.status(200).json({message: "get all users details", details: data })
}   catch(error) {
console.error("Error while fetching data", error)
res.status(500).json({ err: "Internal Server Error" })
}
}


const createUser = async(req,res)=>{
   // res.json({message: "User create successfully"})
   try {
    const{ name, address, faculty } = req.body;
   // console.log(req.body);
 const sqlQuery = "INSERT INTO student (name,address,faculty) values(?,?,?)";
    const userData = await db.query(sqlQuery, [name, address, faculty])
   res.status(201).json({message: "user created successfully!!" })
    
   } catch (error) {
    console.error("Error while fetching data", error)
   res.status(500).json({ err: "Internal Server Error" })
   }
}


const getUserById = async(req,res)=> {
    try{
        let userId = req.params.id;
        let sqlQuery="SELECT * from student where ID= ?";
        const [data] = await db.query(sqlQuery, [userId]);
        if(data.length===0){
    res.status(404).json({message:`User not found with ${userId}`})
        }else{
    res.status(200).json({message:`User found with ${userId}`, details: data})
        }
    }catch(error){
console.error("Error while fetching data", error)
res.status(500).json({ err: "Internal Server Error" })
    }
}





const updateUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const {name, address, faculty} = req.body;

        const checkIfUserExist = 'SELECT * from student WHERE id = ?';
        const [userExist] = await db.query(checkIfUserExist, [userId]);
        if(userExist.length===0){
    res.status(404).json({message:`User not found with ${userId}`})
        }else{
           // console.log("There is data")
           const updateSqlQuery = "UPDATE student SET name=?, address=?, faculty=? WHERE id=?";
           const updatedData = await db.query(updateSqlQuery, [name, address, faculty, userId]);
           res.status(200).json({message: "User updated successfully "});
        }
        
    } catch (error) {
        console.log("Error while fetching data", error)
        res.status(500).json({err: "Internal Server Error"})
    }
}



const deleteUser = async(req, res)=>{
try {
    let userId = req.params.id;

    const checkIfUserExist = 'SELECT * from student WHERE id = ?';
    const [userExist] = await db.query(checkIfUserExist, [userId]);
    if(userExist.length===0){
res.status(404).json({message:`User not found with ${userId}`})
    }else{
       const deleteSqlQuery = 'DELETE from student WHERE id =?';
       const deletedData = await db.query(deleteSqlQuery,[userId]);
       res.status(200).json({message: "User deleted successfully "});
    }
} catch (error) {
    console.log("Error while fetching data", error)
    res.status(500).json({err: "Internal Server Error"})
}
}



module.exports = {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}

