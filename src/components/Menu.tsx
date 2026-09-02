import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link href='/hw1'>home</Link></li><br/>
                <li><Link href='/hw1/users'>users</Link></li>
                <li><Link href='/hw1/posts'>posts</Link></li>
                <li><Link href='/hw1/comments'>comments</Link></li>
            </ul>

            <hr/>
        </div>
    );
};

export default Menu;