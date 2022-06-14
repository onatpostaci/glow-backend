//importing mongoose for using the mongoDB functionality
import mongoose from 'mongoose';

//The schema of PostMpdel that will be stored as a model in MongoDB
const postSchema = mongoose.Schema(
    {
        title: String, //there will be a title of a post
        message: String, //there will be message content of a post
        creator: String, //there will be a creator of a post
        tags: [String], //there will be a collection of tags in a post
        selectedFile: String, //there will be image for a post that is going to be translated into String using base42
        likeCount: {
            type: Number,
            default: 0
        }, //there will be a count of likes in a post
        createdAt: {
            type: Date,
            default: new Date()
        }, //there will be a date at the time of creating the post
        userID: String,
        partyType: String
    }
);

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;