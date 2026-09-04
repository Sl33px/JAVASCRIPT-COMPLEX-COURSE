import React from "react";
import MenuHW3 from "@/components/MenuHW3";

export default function Hw2Layout({children}: { children: React.ReactNode; }) {
    return (
        <div>
            <MenuHW3 />
            <div>{children}</div>
        </div>
    );
}