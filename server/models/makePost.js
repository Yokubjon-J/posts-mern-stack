import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    author: String,
    tags: [String],
    selectedFile: String,
    countLikes: {
        type: Number,
        default: 0
    },
    authoredAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;