import express from 'express'
const router = express.Router()
import { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'


// This is the api/users route


// Post to login
router.route('/', registerUser).post(registerUser).get(protect, admin, getUsers)
router.post("/login",authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/:id').delete(protect, admin, deleteUser)



export default router;