import { Router } from 'express'

const router = Router()

interface homePost {
  name: string,
  age: number
}


router.route('/')
  .get((req, res) => {
    res.send('Hola mundo :D')
  })
  .post((req, res) => {
    // console.log(req.body);
    
     const { name, age } = req.body  as homePost
     if (name && age) {
       res.send({
         message: 'POST received',
         user: `Hello ${name}, you are ${age} years old`
       })
     } else {
       res.send({
         message: 'POST error, should send correct credentials'
       })
     }
  })
  export default router
