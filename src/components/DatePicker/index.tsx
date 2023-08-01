// CustomDatePicker.tsx
import { DatePickerInput, DatePickerInputProps } from "@mantine/dates";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import { FC } from "react";

const _StyledDatePicker = styled(DatePickerInput)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledDatePicker = createPolymorphicComponent<
  "input",
  DatePickerInputProps
>(_StyledDatePicker);

export const CustomDatePicker: FC = () => {
  return (
    <StyledDatePicker
      label="Pick date"
      placeholder="Pick date"
      mx="auto"
      maw={400}
    />
  );
};
