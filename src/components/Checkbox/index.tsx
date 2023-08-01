// CustomCheckbox.tsx
import {
  Checkbox,
  CheckboxGroupProps,
  CheckboxProps,
  Group,
} from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";

const _StyledCheckboxGroup = styled(Checkbox.Group)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledCheckboxGroup = createPolymorphicComponent<
  "input",
  CheckboxGroupProps
>(_StyledCheckboxGroup);
const _StyledCheckbox = styled(Checkbox)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledCheckbox = createPolymorphicComponent<"input", CheckboxProps>(
  _StyledCheckbox
);
export const CustomCheckbox = () => {
  return (
    <StyledCheckboxGroup
      defaultValue={["react"]}
      label="Multi select Checkbox"
    >
      <Group mt="xs">
        <StyledCheckbox value="react" label="React" />
        <StyledCheckbox value="svelte" label="Svelte" />
        <StyledCheckbox value="ng" label="Angular" />
        <StyledCheckbox value="vue" label="Vue" />
      </Group>
    </StyledCheckboxGroup>
  );
};
