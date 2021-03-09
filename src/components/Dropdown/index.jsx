import React, { useCallback, useState } from "react";
import chevronDownIcon from "src/assets/chevron_down.png";

const Dropdown = React.memo((props) => {
  const { placeholder, value, listValue, ...passProps } = props;
  // console.log("Render dropdown");
  return (
    <div
      className={
        "border-gray-300 flex flex-row items-center border rounded-md bg-white py-3 px-4"
      }
    >
      <select
        className="h-10 focus:outline-none appearance-none flex-1 bg-white"
        {...passProps}
      >
        {listValue.map((item) => (
          <option value={item.id} key={item.id} className="bg-white">
            {item.name}
          </option>
        ))}
      </select>
      <img
        src={chevronDownIcon}
        className="w-3 h-2 object-cover"
        alt="dropdownIcon"
      />
    </div>
  );
});

export const useDropdownValue = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  return [value, onChange];
};

export default Dropdown;
