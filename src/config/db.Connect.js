import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alissonsilva:123@alura.wnhzv.mongodb.net/alura-node?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;