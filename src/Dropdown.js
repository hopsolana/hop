import React from 'react';

function Dropdown({ label, options, folder, onSelect }) {
  const handleChange = (event) => {
    onSelect(`/${folder}/${event.target.value}`);
  };

  return (
    <div>
      <label>{label}: </label>
      <select onChange={handleChange}>
        <option value="">Select...</option>
        {options.map((file, index) => (
          <option key={index} value={file}>{file}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
