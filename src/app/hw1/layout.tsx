import MenuHW1 from "@/components/MenuHW1";
import React from "react";

export default function Hw1Layout({children}: { children: React.ReactNode; }) {
    return (
        <div>
            <MenuHW1 />
            <div>{children}</div>
        </div>
    );
}