"use server";


import {createCar} from "@/services/cars.api";
import {CarFormData, carSchemaHW3} from "../../lib/carSchemaHW3";
import {carSchemaHW2} from "../../lib/carSchemaHW2";

export async function createCarActionHW2(data: unknown) {
    const validation = carSchemaHW2.safeParse(data);

    if (!validation.success) {
        return {
            success: false,
            errors: validation.error.flatten().fieldErrors,
        };
    }

    try {
        const createdCar = await createCar(validation.data);
        return { success: true, data: createdCar };
    } catch (error) {
        return {
            success: false,
            message: "Failed to create car via API",
        };
    }
}

export async function createCarActionHW3(data: unknown) {
    const { error, value } = carSchemaHW3.validate(data, { abortEarly: false });

    if (error) {
        const errors: Record<string, string[]> = {};

        error.details.forEach((detail) => {
            const key = detail.path[0] as string;
            if (!errors[key]) {
                errors[key] = [];
            }
            errors[key].push(detail.message);
        });

        return {
            success: false,
            errors,
        };
    }

    try {
        const createdCar = await createCar(value as CarFormData);
        return { success: true, data: createdCar };
    } catch (err) {
        return {
            success: false,
            message: "Failed to create car via API",
        };
    }
}