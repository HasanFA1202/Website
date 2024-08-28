import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-800 font-poppins">
            <div className="relative w-[365px] h-[489px]">
                {/* Outer Border */}
                <div className="absolute inset-0 translate-y-4 w-full h-full bg-orange-400 rounded-[40px] shadow-lg"></div>

                {/* Inner Border */}
                <div className="relative w-full h-full bg-white rounded-[40px] p-10 flex flex-col items-center justify-center z-10">
                    <h1 className="text-2xl font-semibold mb-6">Login</h1>

                    <form className="w-full">
                        <div className="mb-6">
                            <label htmlFor="username" className="block text-sm text-gray-700 mb-2">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                className="w-full py-2 border-b border-orange-400 outline-none text-left text-sm"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm text-gray-700 mb-2">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="w-full py-2 border-b border-orange-400 outline-none text-left text-sm"
                            />
                        </div>

                        <div className="flex items-center justify-center mb-4">
                            <button 
                                type="submit" 
                                className="w-full py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition duration-200"
                            >
                                Login
                            </button>
                        </div>

                        <div className="text-center">
                            <a href="#" className="text-xs text-gray-600 hover:text-gray-800 italic">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
