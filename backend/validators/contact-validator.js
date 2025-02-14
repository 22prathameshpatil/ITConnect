const { z } = require("zod");

const contactSchema = z.object({
  username: z.string({ required_error: "Username is required" }).trim(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email format" }),
  message: z
    .string({ required_error: "Message is required" })
    .min(20, { message: "Message must be at least 20 characters long" })
    .max(200, { message: "Message must be at most 200 characters long" }),
});

module.exports = contactSchema;
