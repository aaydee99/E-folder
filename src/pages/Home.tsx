import React, { useState } from 'react';

const Register: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const [activeTab, setActiveTab] = useState<'register' | 'resetPassword'>('register');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom">
      <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-3xl shadow-lg p-8 md:p-12 w-full max-w-4xl flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-full focus:outline-none ${activeTab === 'register' ? 'bg-[#F25019] text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
            <button
              className={`px-4 py-2 rounded-full focus:outline-none ${activeTab === 'resetPassword' ? 'bg-[#F25019] text-white' : 'bg-gray-200 text-black'}`}
              onClick={() => setActiveTab('resetPassword')}
            >
              Reset Password
            </button>
          </div>
        </div>

        {activeTab === 'register' && (
          <div className="flex w-full">
            <div className="w-2/3 pr-8">
              <h2 className="text-xl font-semibold text-black mb-6">Register</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Narendra Singh"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="mobileNo">
                    Mobile No
                  </label>
                  <input
                    id="mobileNo"
                    type="text"
                    placeholder="9898252510"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="username@gmail.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Select Role
                  </label>
                  <select title='RoleSelection' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]'>
                    <option value="">Coordinator</option>
                    <option value="">Teacher</option>
                    <option value="">HOD</option>
                    <option value="">Dean</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="w-1/3 pl-8 border-l border-gray-200 flex justify-center flex-col items-center">
              <label className="block text-black text-sm font-bold mb-2">
                Profile Picture
              </label>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  {profileImage ? (
                    <img src={profileImage as string} alt="avatar" className="rounded-full" />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
                <label className="bg-[#F25019] text-white px-4 py-2 rounded-full mb-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-700">
                  Upload Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div>
                <label className="text-black text-sm font-bold mb-2 flex justify-center space-x-2 items-center">
                  <div className='w-6 h-0.5 bg-black' />
                  <div className='-mt-0.5'>or select Avatar</div>
                  <div className='w-6 h-0.5 bg-black' />
                </label>
                <div className="flex lg:space-x-4 md:space-x-2 justify-center md:flex-row flex-col lg:items-start items-center">
                  <img src="/path-to-avatar1.png" alt="avatar1" className="w-12 h-12 rounded-full cursor-pointer" />
                  <img src="/path-to-avatar2.png" alt="avatar2" className="w-12 h-12 rounded-full cursor-pointer" />
                  <img src="/path-to-avatar3.png" alt="avatar3" className="w-12 h-12 rounded-full cursor-pointer" />
                  <img src="/path-to-avatar4.png" alt="avatar4" className="w-12 h-12 rounded-full cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resetPassword' && (
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-black mb-6">Reset Password</h2>
            <form className="w-1/2">
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="resetEmail">
                  E-mail
                </label>
                <input
                  id="resetEmail"
                  type="email"
                  placeholder="username@gmail.com"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2" htmlFor="resetEmail">
                  Password
                </label>
                <input
                  id="resetPassword"
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F25019]"
                />
              </div>
              <div className="mt-8 flex justify-center">
                <button className="bg-[#F25019] text-white px-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-orange-700">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="mt-8 flex justify-center">
            <button className="bg-[#F25019] w-full text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-700">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
