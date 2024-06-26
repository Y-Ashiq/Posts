import connection from "../../database/connection.js";
const Db = connection();

const addPosts = (req, res) => {
  Db.query(`insert into posts set ?`, req.body);
  res.json({ message: "done" });
};

const getAllposts = (req, res) => {
  Db.query(`select * from posts`, (error, result) => {
    if (result.length > 0) {
      res.json({ message: result });
    } else {
      res.json({ message: "no posts found" });
    }
  });
};

const getPostOfUser = (req, res) => {

    const id = req.params.id
    Db.query(`select * from posts where UID = ? `,[id],(error,result)=>{

        if (result.length > 0) {
            res.json({ message: result });
          } else {
            res.json({ message: "no posts found" });
          }
    })




};


export default { addPosts, getAllposts,getPostOfUser };
