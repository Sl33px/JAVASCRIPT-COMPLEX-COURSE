"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCarAction } from "@/actions/cars";
import {CarFormData, carSchema} from "../../../../lib/carSchema";

export default function CreateCarPage() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<CarFormData>({
        resolver: zodResolver(carSchema),
    });

    const onSubmit = async (data: CarFormData) => {
        const response = await createCarAction(data);

        if (!response.success && response.errors) {
            // Подсвечиваем ошибки, если их вернул сервер
            Object.entries(response.errors).forEach(([field, messages]) => {
                if (messages && messages[0]) {
                    setError(field as keyof CarFormData, { message: messages[0] });
                }
            });
        } else if (response.success) {
            alert("Car created successfully!");
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