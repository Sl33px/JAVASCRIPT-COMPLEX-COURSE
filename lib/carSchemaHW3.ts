import Joi from "joi";

export interface CarFormData {
    brand: string;
    price: number;
    year: number;
}

export const carSchemaHW3 = Joi.object<CarFormData>({
    brand: Joi.string()
        .trim()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Za-яА-ЯөӨёЁіІїЇєЄґҐ]+$/)
        .required()
        .messages({
            "string.empty": "Brand is required",
            "string.min": "Brand is required",
            "string.max": "Maximum length is 20 characters",
            "string.pattern.base": "Brand must contain only letters",
            "any.required": "Brand is required",
        }),

    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.base": "Price must be a number",
            "number.integer": "Price must be an integer",
            "number.min": "Price cannot be negative",
            "number.max": "Maximum price is 1,000,000",
            "any.required": "Price is required",
        }),

    year: Joi.number()
        .integer()
        .min(1990)
        .max(2026)
        .required()
        .messages({
            "number.base": "Year must be a number",
            "number.integer": "Year must be an integer",
            "number.min": "Minimum year is 1990",
            "number.max": "Maximum year is 2026",
            "any.required": "Year is required",
        }),
});