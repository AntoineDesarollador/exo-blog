import { Router } from "express";

import { homeView } from "../controller/home.js";
import { storiesView } from "../controller/story.js";
import { storyView } from "../controller/story.js";
import { addComment } from "../controller/story.js";
import { entry      } from "../controller/user.js";

const router = Router();

// replacer dans le fichier requis !!!!!!
import bcrypt from "bcrypt";

const saltRounds = 10;

// HOME PAGE
// afficher 3 stories uniquement
router.get("/", homeView);

// STORIES PAGE
// les afficher toutes
router.get("/stories", storiesView);

// STORY PAGE
router.get("/story/:id", storyView);
// send comment
router.post("/comment/send/:id", addComment);

// ENTRY USER

 router.get("/user/entry", entry);

// create user


//, app.post("/user/entry/signin", async (req, res) => {
//     try {
//         let msg = null;
//         const {email, password} = req.body;
//         const query = "SELECT alias, email, pwd FROM user WHERE email = ?";
        
//         const [[user]] = await pool.execute(query, [email]);
        
//         if(user) {
//             const isSame = await bcrypt.compare(password, user.pwd);
//             if(isSame) {
//                 req.session.isLogged = true;
//                 req.session.alias = user.alias;
//                 res.redirect(301, "/");
//                 return;
//             } else msg = "bad password";
//         } else msg = "no account with this email";

//         res.status(200).render("layout", {template: "user/entry", sign: "in", msg: msg});
    
//     } catch (error) {
//         console.log(error);
//     }
// });



// ADMIN 
// A FAIRE 


// app.get("/*", (req,res)=>{
//     res.render("notFound");
// });

export default router;