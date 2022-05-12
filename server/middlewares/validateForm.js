const joi = require('joi');

const createValidation = (data) => {
    const schema = joi.object().keys({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required().min(6).max(20),
        //* phone: joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      });
      
    return schema.validate(data);
};

const updateValidation = (data) => {
    const schema = joi.object({
        name: joi.string().required().min(6),
        email: joi.string().required().email(),
        password: joi.string().required()
    });
    return schema.validate(data);
};
module.exports = { createValidation, updateValidation };
