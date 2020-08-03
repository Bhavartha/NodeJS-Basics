const Joi = require('joi');

const arrString = ["Yellow", "Red", "Green"];

const userInput = {
    personalInfo: {
        street: 'XYZ Rd.',
        city: 'Mumbai',
        state: 'MH',
    },
    favColors: arrString
};

const personalInfoSchema = Joi.object({
    street: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().length(2).required(),
});

const favColorsSchema = Joi.array().items(Joi.string());

const schema = Joi.object({
    personalInfo: personalInfoSchema,
    favColors: favColorsSchema,
});

const { error, result } = schema.validate(userInput);
if (error)
    console.log(error);
else
    console.log('Valid');