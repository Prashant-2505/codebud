import mongose from 'mongoose'

const patternQuestionSchema = new mongose.Schema({
    topicName: {
        type: String,
        required: true,
        unique: true
    },
    question: [String]
}, { timestamps: true })

const PatternQuestionModel =  mongose.model.PatternQuestionModel || mongose.model("PatternQuestionModel",patternQuestionSchema) 

export default PatternQuestionModel