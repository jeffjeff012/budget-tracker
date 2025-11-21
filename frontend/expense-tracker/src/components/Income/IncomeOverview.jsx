import React, { useEffect, useState } from 'react'
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarChartData } from '../../utils/helper';
import { LuPlus, LuWalletMinimal } from 'react-icons/lu';

const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareIncomeBarChartData(transactions);
        setChartData(result);

        return () => { };
    }, [transactions]);

    // Empty State
    // if (!transactions || transactions.length === 0) {
    //     return (
    //         <div className="card">
    //             <h5 className="text-lg">Recent Income</h5>
    //             <div className="mt-6 flex flex-col items-center justify-center py-12">
    //                 {/* Icon */}
    //                 <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
    //                     <LuWalletMinimal className="text-4xl text-orange-500" />
    //                 </div>

    //                 {/* Message */}
    //                 <p className="text-gray-700 font-medium text-center mb-2">
    //                     No income recorded yet
    //                 </p>
    //                 <p className="text-sm text-gray-500 text-center max-w-xs">
    //                     Start tracking your income to see insights and trends here
    //                 </p>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className='card'>
            <div className='flex items-center justify-between'>
                <div className=''>
                    <h5 className='text-lg'>Income Overview</h5>
                    <p className='text-xs text-gray-400 mt-0.5'>
                        Track your earnings over time and analyze your income trends
                    </p>
                </div>
                <button className='add-btn' onClick={onAddIncome}>
                    <LuPlus className='text-lg' />
                    Add Income
                </button>
            </div>

            <div className='mt-10'>
                <CustomBarChart data={chartData} />
            </div>
        </div>
    )
};

export default IncomeOverview;