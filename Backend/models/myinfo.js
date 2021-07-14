const mongoose = require('mongoose')
const Schema = mongoose.Schema

const opts = { toJSON: { virtuals: true } };

const mySchema = new Schema(
    {
        bio: { type: String, required: true },
        hobby: { type: String, required: false },
        info: [
            {
                name: {
                    type: String,
                    required: false
                },
                phone: {
                    type: String,
                    required: false
                },
                email: {
                    type: String,
                    required: false
                }
            }
        ],
        exp: [
            {
                totalexp: {
                    type: String,
                    required: false
                },
                project: {
                    type: String,
                    required: false
                }
            }
        ],
        lang: [
            {
                name: {
                    type: String,
                    required: false
                }
            }
        ],
        databases: [
            {
                name: {
                    type: String,
                    required: false
                }
            }
        ],
        devtools: [
            {
                name: {
                    type: String,
                    required: false
                }
            }
        ],
        projmgttools: [
            {
                name: {
                    type: String,
                    required: false
                }
            }
        ]
    }, opts
)

module.exports = mongoose.model('myinfo', mySchema)