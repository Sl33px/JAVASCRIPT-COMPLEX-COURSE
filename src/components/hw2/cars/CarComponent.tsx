import {FC} from "react";
import {ICar} from "@/models/ICar";

type Props = {
    car: ICar;
}

const CarComponent: FC<Props> = ({car}: Props) => {
    return (
        <div>
            id: {car.id} ------ brand: {car.brand} ------ price: {car.price} ------ year: {car.year}
        </div>
    );
};

export default CarComponent;