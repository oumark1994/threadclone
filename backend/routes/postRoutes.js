import express from "express"
import { createPost,getPost,deletePost,likeUnlikePost,replyToPost,getFeedPosts, getUserPosts} from "../controllers/postController.js"
import protectRoute from "../middlewares/protectRoute.js"
const router = express.Router()
router.get("/feed",protectRoute,getFeedPosts)
router.get("/user/:username",getUserPosts)
router.post("/create",protectRoute,createPost)
router.put("/like/:id",protectRoute,likeUnlikePost)
router.put("/reply/:id",protectRoute,replyToPost)
router.get("/:id",getPost)
router.delete("/:id",protectRoute,deletePost)


export default router