//importing mongoose for using the mongoDB functionality
import mongoose from 'mongoose';
//The schema of PostMpdel that will be stored as a model in MongoDB
const userSchema = mongoose.Schema(
    {
        email: String, //there will be a title of a post
        password: String, //there will be message content of a post
        username: String, //there will be a creator of a post
        name: String,
        surname: String,
        postCount: {
            type: Number,
            default: 0
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        sex: String,
        location: String,
        userType: String
    }
);

const User = mongoose.model("User", userSchema);

export default User;