import Menu from "@/components/Menu";
import React from "react";

export default function Hw1Layout({children}: { children: React.ReactNode; }) {
    return (
        <div>
            <Menu />
            <div>{children}</div>
        </div>
    );
}