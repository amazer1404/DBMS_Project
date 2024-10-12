import React from 'react'
import './signup.css'

const SignUp = () => {
    const loadFile = event => {
        const profilePic = document.getElementById('profile-pic');
        profilePic.src = URL.createObjectURL(event.target.files[0]);
        profilePic.classList.remove('hidden');
    };
    return (
        <div class="flex items-center justify-center min-h-screen bg-gradient p-6">
            <div id="watermark" className='cursor-wait z-0'>
                <img src='AskUrDoc1.png' alt="Watermark"/>
            </div>
            <div class="bg-white p-8 md:p-12 rounded-3xl w-full max-w-2xl shadow-lg space-y-6">
                <h2 class="text-3xl font-semibold text-center text-charcoal">Ask Ur Doctor - Sign Up</h2>
                <p class="text-center text-gray-600">Sign up to connect with certified medical professionals</p>

                <form class="space-y-5">

                    <div class="flex justify-center">
                        <div class="photo-box relative w-24 h-24 rounded-full bg-gray-200 shadow-inner overflow-hidden flex items-center justify-center">
                            <img id="profile-pic" src="" alt="Profile Picture" class="w-full h-full object-cover absolute top-0 left-0 z-1 hidden"/>
                                <input type="file" id="photo-upload" name="photo" accept="image/*" onChange={(e)=>loadFile(e)} class="absolute w-full h-full opacity-0 cursor-pointer z-10 bg-transparent"/>
                                </div>
                        </div>

                        <div class="flex items-center space-x-4">
                            <label for="username" class="w-1/3 text-charcoal font-semibold">Username:</label>
                            <input type="text" id="username" class="z-10 bg-transparent w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your username"/>
                        </div>

                        <div class="flex items-center space-x-4">
                            <label for="email" class="w-1/3 text-charcoal font-semibold">Email:</label>
                            <input type="email" id="email" class="z-10 bg-transparent w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email"/>
                        </div>


                        <div class="flex space-x-7 items-center">
                            <label for="gender" class="w-1/4 text-charcoal font-semibold">Gender:</label>
                            <select id="gender" class="text-black z-10 bg-transparent w-1/4 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <label for="dob" class="w-1/4 text-charcoal font-semibold">Date of Birth:</label>
                            <input type="date" id="dob" class="z-10 bg-transparent w-1/4 p-2 border rounded-lg border-primary focus:outline-none focus:ring-2 focus:ring-primary"/>
                        </div>


                        <div class="flex items-center space-x-4">
                            <label for="password" class="w-1/3 text-charcoal font-semibold">Password:</label>
                            <input type="password" id="password" class="z-10 bg-transparent w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your password"/>
                        </div>


                        <div class="flex items-center space-x-4">
                            <label for="confirm-password" class="w-1/3 text-charcoal font-semibold">Confirm Password:</label>
                            <input type="password" id="confirm-password" class="z-10 bg-transparent w-full p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Confirm your password"/>
                        </div>

                        <div class="flex justify-center mt-6">
                            <button type="submit" class="z-10 bg-transparent px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary">Create Account</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp