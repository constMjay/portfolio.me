const Joi = require('joi');

const formValidation = (formInfo) => {
    const schema = Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().required()
    })
    return schema.validate(formInfo)
};

module.exports = formValidation;