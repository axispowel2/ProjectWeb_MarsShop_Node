import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: String,
    author: String,
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Post', PostSchema);