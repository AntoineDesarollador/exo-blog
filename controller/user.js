import Query from "../model/index.js";

const entry = async (req, res) => {
    if(req.query.sign === "in" || req.query.sign === "up") {
        res.status(200).render("layout", { template: "user/entry", ...req.query, msg: null });
         } else if(req.query.sign === "out"){
             req.session.destroy();    
             res.redirect(301, "/");
         }
         else next();
     

    try {
                 const { alias, email, password } = req.body;
                 const query = `INSERT INTO user (alias, email, pwd, regDate, id_role) VALUES (?, ?, ?, now(), 3 )`;
                 const hashPWD = await bcrypt.hash(password, saltRounds);
                 await pool.execute(query, [alias, email, hashPWD]);
                

                  // invoquer la méthode traitant la requête SQL
                 

                 
             res.status(200).render("layout", {template: "user/entry", sign: "in", msg: null});

             } catch (error) {
                 console.log(error);
                 if(error.sqlMessage?.includes("alias")){
                     res.render("layout", { template: "user/entry", sign: "up", msg: "alias already exists !" });
                 }
                 // ... traitements d'autres messages d'erreurs
             }    
         };



export { entry };

