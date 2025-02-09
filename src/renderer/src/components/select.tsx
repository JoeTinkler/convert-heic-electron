import { useState } from "react";
import { SelectTitle, SelectOptionsContainer, SelectOption } from "./ui/select";
import { Arrow } from "./ui/arrow";
type PropTypes = {
  value: string,
  options: SelectOption[],
  onChange: (value: string) => void
}

export const Select: React.FC<PropTypes> = ({ value, options, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const onSelectOption = (option: SelectOption) => {
    onChange(option.value);
    setShowOptions(false);
  }

  return (
    <>
      <SelectTitle onClick={() => setShowOptions(!showOptions)}>
        {options.find((o) => o.value === value)?.label} 
        <Arrow />
      </SelectTitle>
      {showOptions &&
        <SelectOptionsContainer>
          {options.map((option) => (
            <SelectOption key={option.value} $selected={value === option.value} onClick={() => onSelectOption(option)}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptionsContainer>
      }
    </>
  );
}