// CustomInput.tsx
import { TextInputProps, TextInput } from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";

const _StyledInput = styled(TextInput)`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledInput = createPolymorphicComponent<"input", TextInputProps>(
  _StyledInput
);

export const CustomInput = () => {
  return (
    <StyledInput

      label="Single Line Text"
      placeholder="Enter text here"
    />
  );
};
