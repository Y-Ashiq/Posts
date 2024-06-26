import mysql from "mysql2";

const connection = () => {
   const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "blogs",
    port: 3306,
  })
  
  connect.connect((error) => {
    if (error) {
      return console.log("error at : " + error);
    }
    console.log("connected");
  });

  
  return connect
};

export default connection;

