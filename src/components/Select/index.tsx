// CustomSelect.tsx
import { SelectProps, Select, MultiSelect, MultiSelectProps } from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import { FC } from "react";

const _StyledSelect = styled(Select)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledSelect = createPolymorphicComponent<"select", SelectProps>(
  _StyledSelect
);

export const CustomSelect: FC = () => {
  return (
    <StyledSelect
      label="Single Select Dropdown"
      placeholder="Pick one"
      searchable
      nothingFound="No options"
      data={["React", "Angular", "Svelte", "Vue"]}
    />
  );
};


const _StyledMultiSelect = styled(MultiSelect)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledMultiSelect = createPolymorphicComponent<"select", MultiSelectProps>(
  _StyledMultiSelect
);

export const CustomMultiSelect: FC = () => {
  return (
    <StyledMultiSelect
      label="Multiple Value"
      placeholder="Multi select Dropdown"
      searchable
      nothingFound="No options"
      data={["React", "Angular", "Svelte", "Vue"]}
    />
  );
};

