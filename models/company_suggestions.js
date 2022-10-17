const mongoose = require("mongoose");

const company_suggestionsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "users",
    },
    description: {
        type: String,
        required: true,
    },
});

const company_suggestionsModel = mongoose.model("company_suggestions", company_suggestionsSchema);

module.exports = company_suggestionsModel;
