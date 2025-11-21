import React, { useState } from 'react' // Add { useState }
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const Input = ({ value, onChange, placeholder, label, type }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="relative">
            <label className="text-[13px] text-slate-700">{label}</label>

            <div className="input-box relative">
                <input
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none pr-10"
                    value={value}
                    onChange={(e) => onChange(e)}
                />

                {type === "password" && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {showPassword ? (
                            <FaRegEye
                                size={22}
                                className="text-purple-700 text-primary cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        ) : (
                            <FaRegEyeSlash
                                size={22}
                                className="text-slate-700 cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Input