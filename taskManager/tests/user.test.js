const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    email: 'Rumi@gmail.com',
    pass: '12345678'
}
beforeEach( async () =>{
    await User.deleteMany()
    await new User(userOne).save()
})

// afterEach(() =>{
//     console.log('afterEach');
// })

test('Sign up a new user',async () =>{
    await request(app).post('/users/signup').send({
        email: 'maziar@gmail.com',
        pass: '12345678'
    }).expect(201)
})
test('Log in a new user',async () =>{
    await request(app).post('/users/login').send(userOne).expect(200)
})
test('Unauthorized user',async () =>{
    await request(app).post('/users/login').send({
        email: 'b@gmail.com',
        pass:'11111111'
    }).expect(401)
})