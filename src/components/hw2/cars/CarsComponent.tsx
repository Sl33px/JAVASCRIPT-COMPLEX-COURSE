import {getAllCars} from "@/services/cars.api";
import {ICar} from "@/models/ICar";
import CarComponent from "@/components/hw2/cars/CarComponent";


const CarsComponent = async () => {
    const carsArr = await getAllCars()

    return (
        <div>
            <h2>Cars List:</h2>
            {
                carsArr.map((car: ICar) => (
                    <CarComponent key={car.id} car={car} />
                ))
            }
        </div>
    );
};

export default CarsComponent;