import {Schema, model} from 'mongoose';

const votingSchema = new Schema({
    frage:{
        type: String,
        required: true
    },
    antworten:{
        type: [String],
        required: true  
    },
    antwortA:{
        type: Number,
        default: 0
    },
    antwortB:{
        type: Number,
        default: 0
    },
    erstellt:{
        type: Date,
        default: Date.now
    }
});

export default model('Voting', votingSchema);