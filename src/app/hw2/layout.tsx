import React from "react";
import MenuHW2 from "@/components/MenuHW2";

export default function Hw2Layout({children}: { children: React.ReactNode; }) {
    return (
        <div>
            <MenuHW2 />
            <div>{children}</div>
        </div>
    );
}