import React from "react";
import { TrendingUp, DollarSign, PieChart, Wallet } from "lucide-react";
import RightSideLogin from "./RightSideLogin";

const AuthLayout = ({ children }) => {
    return <div className="flex">
        <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className="text-2xl font-medium text-black">Expense Tracker</h2>
                {children}
            </div>

        <RightSideLogin />
    </div>
};

export default AuthLayout;