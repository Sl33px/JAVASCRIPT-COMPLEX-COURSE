import { z } from "zod";

export const carSchema = z.object({
    brand: z
        .string()
        .min(1, "Brand is required")
        .max(20, "Maximum length is 20 characters")
        .regex(
            /^[a-zA-Za-яА-ЯёЁіІїЇєЄґҐ]+$/,
            "Brand must contain only letters"
        ),
    price: z
        .number({ invalid_type_error: "Price must be a number" })
        .int("Price must be an integer")
        .min(0, "Price cannot be negative")
        .max(1000000, "Maximum price is 1,000,000"),
    year: z
        .number({ invalid_type_error: "Year must be a number" })
        .int("Year must be an integer")
        .min(1990, "Minimum year is 1990")
        .max(2026, "Maximum year is 2026"),
});

export type CarFormData = z.infer<typeof carSchema>;