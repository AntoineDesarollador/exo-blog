import { Router } from "express";

import { homeView } from "../controller/home.js";
import { storiesView } from "../controller/story.js";
import { storyView } from "../controller/story.js";
import { addComment } from "../controller/story.js";
import { entry } from "../controller/user.js";
import { signIn } from "../controller/signIn.js";

const router = Router();

// replacer dans le fichier requis !!!!!!



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


router.post("/user/entry/signin", signIn); 



// ADMIN 
// A FAIRE 


// app.get("/*", (req,res)=>{
//     res.render("notFound");
// });

export default router;