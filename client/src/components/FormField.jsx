import React from 'react';

<<<<<<< HEAD
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
=======
const FormField = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      {/* <label
>>>>>>> 66eef333c9c6f7fdd3c1795c274462849f44a739
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
<<<<<<< HEAD
      )}
    </div>
    <input
=======
      )} */}
    </div>
    {/* <input
>>>>>>> 66eef333c9c6f7fdd3c1795c274462849f44a739
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
<<<<<<< HEAD
    />
=======
    /> */}
>>>>>>> 66eef333c9c6f7fdd3c1795c274462849f44a739
  </div>
);

export default FormField;
