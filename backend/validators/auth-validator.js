const {z} = require("zod");

const signUpSchema = z.object({
    username: 
    z
    .string({required_error: "Username is required"})
    .trim()
    .min(3 ,{message: "Username must be at least 3 characters long"})
    .max(20,{message: "Username must be at most 20 characters long"}),
    email:
    z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email format"})
    .min(6 ,{message: "Email must be at least 6 characters long"})
    .max(200,{message: "Email must be at most 200 characters long"}),
    password: 
    z
    .string({required_error: "Password is required"})
    .trim()
    .min(6 ,{message: "Password must be at least 6 characters long"})
    .max(200,{message: "Password must be at most 200 characters long"}),
    phone: 
    z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10 ,{message: "Phone must be at least 10 characters long"})
    .max(20,{message: "Phone must be at most 20 characters long"}),
});

const loginSchema = z.object({
    email:
    z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email format"}),
    password: 
    z
    .string({required_error: "Password is required"})
    .trim(),
});


module.exports = {signUpSchema,loginSchema};   
