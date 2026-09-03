import Link from "next/link";

const MenuHW1 = () => {
    return (
        <div>
            <ul>
                <li><Link href='/hw2'>home</Link></li><br/>
                <li><Link href='/hw2/cars'>cars</Link></li><br/>
                <li><Link href='/hw2/car-form'>create car</Link></li><br/>
            </ul>

            <hr/>
        </div>
    );
};

export default MenuHW1;