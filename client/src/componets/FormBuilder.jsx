import React from "react";

const FormBuilder = () => {
  return (
    <form className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-2xl space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Simple Form</h2>

      {/* 📝 Text Field */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* ⬇️ Dropdown */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Select Country:
        </label>
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Choose one</option>
          <option>India</option>
          <option>USA</option>
          <option>Germany</option>
        </select>
      </div>

      {/* ✅ Checkboxes */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Hobbies:</label>
        <div className="space-y-2">
          {["Reading", "Coding", "Music"].map((hobby) => (
            <label key={hobby} className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 accent-blue-500" />
              <span>{hobby}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 🔘 Radio Buttons */}
      <div>
        <label className="block font-medium text-gray-700 mb-2">Gender:</label>
        <div className="space-y-2">
          {["Male", "Female", "Other"].map((gender) => (
            <label key={gender} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                className="w-5 h-5 accent-pink-500"
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 🔘 Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormBuilder;
