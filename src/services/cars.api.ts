import {ICar} from "@/models/ICar";

const BASE_URL = "http://bigbird.space/carsAPI/v1";

export const getAllCars = async (): Promise<ICar[]> => {
    return await fetch(`${BASE_URL}/cars`).then(res => res.json())
}

export const createCar = async (data: ICar): Promise<ICar> => {
    const res = await fetch(`${BASE_URL}/cars`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    if (!res.ok) {
        throw new Error('Failed to create car')
    }
    return res.json()
}