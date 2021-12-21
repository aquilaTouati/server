import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    nom: String,
   catégorie: String,
    prix: String,
    etat: String,
    wilaya: String,
    description: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;