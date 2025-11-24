import React from "react";
import { TrendingUp, DollarSign, PieChart, Wallet } from "lucide-react";

const AuthLayout = ({ children }) => {
  return <div className="flex">
     
      {/* Right Side Design - Hidden on Mobile */}
      <div className="hidden md:flex md:w-[47vw] h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full px-12 text-white">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Take Control of
              <br />
              Your Finances
            </h1>
            <p className="text-lg text-white/90 max-w-md">
              Track expenses, manage budgets, and achieve your financial goals with ease
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6 mt-8 w-full max-w-lg">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Analytics</h3>
              <p className="text-sm text-white/80">Visualize spending patterns</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Budget Planning</h3>
              <p className="text-sm text-white/80">Set and track budgets</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Category Insights</h3>
              <p className="text-sm text-white/80">Understand your habits</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Track your Money</h3>
              <p className="text-sm text-white/80">Reach financial goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
};

export default AuthLayout;