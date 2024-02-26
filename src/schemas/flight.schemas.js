import joiBase from "joi"
import Joi from 'joi';
import JoiDate from '@joi/date';

const joiDateMode = Joi.extend(JoiDate);

export const flightSchema = Joi.object({
    origin: Joi.number().integer().required().min(1),
    destination: Joi.number().integer().required().min(1),
    date: joiDateMode.date().format('YYYY-MM-DD').required(),
});
