
import bcrypt from "bcrypt";



const signIn = async (req, res) => {
          try {
              let msg = null;
              const {email, password} = req.body;
              const query = "SELECT alias, email, pwd FROM user WHERE email = ?";
            
              const [[user]] = await pool.execute(query, [email]);
            
              if(user) {
                  const isSame = await bcrypt.compare(password, user.pwd);
                  if(isSame) {
                      req.session.isLogged = true;
                      req.session.alias = user.alias;
                      res.redirect(301, "/");
                      return;
                  } else msg = "bad password";
              } else msg = "no account with this email";
    
              res.status(200).render("layout", {template: "user/entry", sign: "in", msg: msg});
        
          } catch (error) {
              console.log(error);
          }
      };


export {signIn};