import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm sm:max-w-xs md:max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl p-4 sm:p-4 md:p-8 transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 md:w-36 md:h-36 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
        />

        {/* Name */}
        <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
          John Doe
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm md:text-base text-gray-600 text-center">
          A passionate web developer who loves creating interactive and
          user-friendly applications.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
