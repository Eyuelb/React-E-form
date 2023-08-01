// CustomButton.tsx
import { Button, ButtonProps } from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import { FC } from "react";

const _StyledButton = styled(Button)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

export const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton
);

export const CustomButton: FC = () => {
  return (
    <StyledButton variant="filled" color="green.5" radius="md">
      This is styled button
    </StyledButton>
  );
};
