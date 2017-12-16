import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    content: String,
    author: String,
    time: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Post', PostSchema);
