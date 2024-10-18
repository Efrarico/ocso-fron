import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/_sidebar/Sidebard";

export default function LayoutDashboard({
    children,
    count
}:Readonly<{
    children: React.ReactNode;
    count: React.ReactNode;
}>){
    return (
        <div className="w-screen h-screen bg-orange-50">
            <Header/>
            <div className="flex flex-row items-center">
                <Sidebar/>
                {children}
                {count}
            </div>
        </div>
    )
    
}