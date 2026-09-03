"use server";


import {carSchema} from "../../lib/carSchema";
import {createCar} from "@/services/cars.api";

export async function createCarAction(data: unknown) {
    const validation = carSchema.safeParse(data);

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