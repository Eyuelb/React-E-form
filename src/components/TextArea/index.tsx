// CustomTextArea.tsx
import { TextareaProps, Textarea } from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import { FC } from "react";

const _StyledTextArea = styled(Textarea)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledTextArea = createPolymorphicComponent<"textarea", TextareaProps>(
  _StyledTextArea
);

export const CustomTextArea: FC = () => {
  return (
    <StyledTextArea
      label="Multi Line Text"
      placeholder="Enter your message here"
    />
  );
};
