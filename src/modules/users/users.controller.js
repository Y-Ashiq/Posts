import connection from "../../database/connection.js";
import bcrypt from "bcrypt";
const Db = connection();

const signUp = (req, res) => {
  Db.query("insert into users set ?", req.body);

  res.status(201).json({ message: "user created succefully" });
};


const signIn = (req, res) => {
  Db.execute(
    `select * from users where  email = '${req.body.email}'`,
    (err, result) => {
      if (result.length == 0) {
        res.json({ message: "there is no recorde" });
      } else {
        const isMatched = bcrypt.compareSync(
          req.body.password,
          result[0].password
        );
        if (isMatched) {
          res.status(200).json({ message: "welcome" });
        } else {
          res.status(400).json({ message: "invalid email or password" });
        }
      }
    }
  );
};

export default { signUp, signIn };
