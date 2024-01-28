import { expressjwt } from "express-jwt";
import jwt from 'jsonwebtoken'
import { User } from "./User.js";


const secret = Buffer.from('Ljf45dFu/fhhROR9Jíkag', 'base64')


export const authMiddleware = expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret
})

export const handleLogin = async(req, res) => {
    const {name, password} = req.body
    const user = await User.findOne({name: name})
    if(!user || user.password !== password){
        res.sendStatus(401)
    } else {
        const claims = { sub: user.id, email: user.email}
        const token = jwt.sign(claims, secret);
        res.json({token})
    }
}