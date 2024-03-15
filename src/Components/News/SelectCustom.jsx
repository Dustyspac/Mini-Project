import React, { useState } from "react";
import styled, { css } from "styled-components";

function SelectCustom({ options, category, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Box onClick={handleToggleOpen} isOpen={isOpen}>
        <OptionName>
          <span>{category.label}</span>
          <span>▼</span>
        </OptionName>
      </Box>
      {isOpen && (
        <Box1>
          <ul>
            {options.map((item) => (
              <OptionList
                onChange={onChange}
                onClick={() => {
                  onChange(item);
                  handleToggleOpen();
                }}
                key={item.value}
              >
                {item.label}
              </OptionList>
            ))}
          </ul>
        </Box1>
      )}
    </div>
  );
}

export default SelectCustom;

const Box = styled.div`
  cursor: pointer;
  margin-top: 17px;
  padding: 12px;
  background: white;
  border: 1px solid gray;
  border-radius: 2px;
  ${(props) =>
    props.isOpen &&
    css`
      border: 2px solid blue;
    `}
`;
const Box1 = styled.div`
  min-height: 60px;
  overflow-y: auto;
  background: white;
  margin-top: 4px;
  padding: 12px;
  border: 1px solid gray;
  border-radius: 2px;

  ul {
    all: unset;
  }
`;

const OptionName = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OptionList = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 4px;
  font-weight: bold;
  &:hover {
    background-color: #ccc8aa;
    border-radius: 8px;
  }
`;
