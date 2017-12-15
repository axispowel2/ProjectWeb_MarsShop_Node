import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    }
    ,
    content: {
        type: String
    }
    ,
    author: {
        type: String,
        required: true,
        trim: true
    }
    ,
    time: {
        type: Date,
        default: Date.now
    }
})
mongoose.model('Post', PostSchema);