import React, { Fragment } from "react";
import Select from "react-select";

function SelectTheme() {
  const options = [
    { value: "social", label: "사회" },
    { value: "environment", label: "환경" },
    { value: "technology", label: "테크" },
    { value: "etc", label: "기타" },
  ];
  return (
    <Fragment>
      <div>
        <Select
          options={options}
          defaultValue={options[3]}
          styles={customStyles}
        />
      </div>
    </Fragment>
  );
}

export default SelectTheme;


const customStyles = {
  control: (provided) => ({
    ...provided,
    marginTop: "20px",
    width: "100%",
    padding: "6px 4px",
    border: "1px solid gray",
    color: "gray",
  }),
  option: (provided) => ({
    ...provided,
    width: "100%",
  }),
};
