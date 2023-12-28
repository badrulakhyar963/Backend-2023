const db = require("../config/database");

class Student {

    static all(){
        const query = "SELECT * from students";
        
        db.query(query,(err,results)=>{
            return results;
        });
    }
}
module.exports = Student;