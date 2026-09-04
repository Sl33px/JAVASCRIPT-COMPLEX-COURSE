"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createCarActionHW3 } from "@/actions/cars";
import {carSchemaHW3} from "../../../../lib/carSchemaHW3";
import {CarFormData} from "../../../../lib/carSchemaHW3";

export default function CreateCarPage() {
    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CarFormData>({
        resolver: joiResolver(carSchemaHW3),
    });

    const onSubmit = async (data: CarFormData) => {
        const response = await createCarActionHW3(data);

        if (!response.success && response.errors) {
            Object.entries(response.errors).forEach(([field, messages]) => {
                if (messages && messages[0]) {
                    setError(field as keyof CarFormData, { message: messages[0] });
                }
            });
        } else if (response.success) {
            alert("Car created successfully!");
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("brand")} placeholder="Brand" />
                {errors.brand && <p style={{ color: "red" }}>{errors.brand.message}</p>}
            </div>

            <div>
                <input
                    type="number"
                    {...register("price", { valueAsNumber: true })}
                    placeholder="Price"
                />
                {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
            </div>

            <div>
                <input
                    type="number"
                    {...register("year", { valueAsNumber: true })}
                    placeholder="Year"
                />
                {errors.year && <p style={{ color: "red" }}>{errors.year.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Car"}
            </button>
        </form>
    );
}