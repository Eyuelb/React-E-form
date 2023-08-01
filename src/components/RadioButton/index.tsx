// CustomRadioButton.tsx
import {
    RadioGroupProps,
    RadioProps,
    Radio,
    Flex,
  } from "@mantine/core";
  import { createPolymorphicComponent } from "@mantine/core";
  import styled from "@emotion/styled";
  import { FC } from "react";
  
  const _StyledRadio = styled(Radio)`
    width: 100%;
    border-width: 0.125rem;
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.white : theme.black};
  `;
  
  const _StyledRadioGroup = styled(Radio.Group)`
    width: 100%;
    border-width: 0.125rem;
    color: ${({ theme }) =>
      theme.colorScheme === "dark" ? theme.white : theme.black};
  `;
  
  const StyledRadio = createPolymorphicComponent<"input", RadioProps>(
    _StyledRadio
  );
  
  const StyledRadioGroup = createPolymorphicComponent<"input", RadioGroupProps>(
    _StyledRadioGroup
  );
  
  export const CustomRadioButton: FC = () => {
    return (
      <StyledRadioGroup
        name="favoriteFramework"
        label="Single Select Checkbox"
      >
        <Flex mt="xs" direction="row" align={"flex-start"}>
          <StyledRadio value="react" label="Yes" maw={"100px"} />
          <StyledRadio value="svelte" label="No" maw={"100px"} />
        </Flex>
      </StyledRadioGroup>
    );
  };
  