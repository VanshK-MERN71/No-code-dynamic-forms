import React, { useState } from "react";

const CustomFormBuilder = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [font, setFont] = useState("sans-serif");
  const [align, setAlign] = useState("left");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🛠️ Custom Form Builder
      </h1>

      {/* ⚙️ Settings Panel */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="bg-white p-4 rounded-xl shadow-md w-full md:w-1/3 space-y-4">
          <h2 className="text-xl font-semibold">🧰 Customization Panel</h2>

          <div>
            <label className="block font-medium">Background Color:</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Text Color:</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Font Style:</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="w-full border px-2 py-1 rounded"
            >
              <option value="sans-serif">Sans Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
            </select>
          </div>

          <div>
            <label className="block font-medium">Alignment:</label>
            <select
              value={align}
              onChange={(e) => setAlign(e.target.value)}
              className="w-full border px-2 py-1 rounded"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>

        {/* 📄 Live Preview Form */}
        <form
          className="bg-white p-6 rounded-xl shadow-md w-full md:w-2/3 space-y-6"
          style={{
            backgroundColor: bgColor,
            color: textColor,
            fontFamily: font,
            textAlign: align,
          }}
        >
          <h2 className="text-2xl font-bold">🎯 Live Form Preview</h2>

          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Country:</label>
            <select className="w-full px-4 py-2 border rounded">
              <option>India</option>
              <option>USA</option>
              <option>Germany</option>
            </select>
          </div>

          <div>
            <label>Hobbies:</label>
            <div className="space-y-2">
              {["Reading", "Gaming", "Cooking"].map((hobby) => (
                <label key={hobby} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span>{hobby}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label>Gender:</label>
            <div className="space-y-2">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender} className="flex items-center gap-2">
                  <input type="radio" name="gender" />
                  <span>{gender}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomFormBuilder;
