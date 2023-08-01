// CustomDatePicker.tsx
import { Group, createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
import React, { FC } from "react";
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { Button, ButtonProps } from "@mantine/core";

const _StyledButton = styled(Button)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const _StyledUploader = styled(Dropzone)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`;

const StyledUploader = createPolymorphicComponent<"input", DropzoneProps>(
  _StyledUploader
);

export const StyledButton = createPolymorphicComponent<"button", ButtonProps>(
  _StyledButton
);
export const CustomUploader: FC = () => {
  const openRef = React.useRef<() => void>(()=>{});

  return (
    <StyledUploader
    openRef={openRef}
    onDrop={() => {}}
    activateOnClick={false}
    styles={{ inner: { pointerEvents: 'all' } }}
  >
    <Group position="center">
      Attachment file
      <StyledButton onClick={() => openRef.current()}>Select files</StyledButton>
    </Group>
  </StyledUploader>
  );
};
