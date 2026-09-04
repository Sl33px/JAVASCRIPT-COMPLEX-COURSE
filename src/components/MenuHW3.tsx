import Link from "next/link";

const MenuHW3 = () => {
    return (
        <div>
            <ul>
                <li><Link href='/hw3'>home</Link></li><br/>
                <li><Link href='/hw3/cars'>cars</Link></li><br/>
                <li><Link href='/hw3/car-form'>create car</Link></li><br/>
            </ul>

            <hr/>
        </div>
    );
};

export default MenuHW3;