import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpenses = ({ data = []}) => {
    const [chartData, setChartData] = useState([]);
    
    console.log("Chart data:", data);
    useEffect(() => {
        const result = prepareExpenseBarChartData(data);
        setChartData(result);

        return () => { };
    }, [data]);

    if (!data || data.length === 0) {
        return (
            <div className="card">
                <h5 className="text-lg">Last 30 Days Expenses</h5>
                <div className="mt-6 text-center py-8">
                    <p className="text-gray-500">No expenses in the last 30 days</p>
                    <p className="text-sm text-gray-400 mt-2">Start tracking your expenses to see insights here</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card col-span-1">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Last 30 Days Expenses</h5>
            </div>

            <CustomBarChart data={chartData} xAxisKey="category" />
        </div>
    )
}

export default Last30DaysExpenses;