import connection from "../database/connection.js";
import bcrypt from "bcrypt";

const Db = connection();

export const checkUser = (req, res, next) => {
  Db.execute(
    `SELECT email FROM users WHERE email = '${req.body.email}'`,
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err });
      }

      if (result.length != 0) {
        res.status(200).json({ message: "this email is already exist" });
      } else {
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        next();
      }
    }
  );
};
