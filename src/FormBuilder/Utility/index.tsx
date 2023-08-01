import { CustomElementProps, RenderComponentProps } from "../type";
import {
  CustomDatePicker,
  CustomInput,
  CustomRadioButton,
  CustomSelect,
  CustomTextArea,
  CustomUploader,
  CustomButton,
  CustomCheckbox,
  CustomMultiSelect,
} from "../../components";
import { useDrag, useDrop } from "react-dnd";
import { Flex } from "@mantine/core";
import { useFormState } from "../Provider/FormContext";
import { FC } from "react";

export const RenderComponent:FC<RenderComponentProps> = ({type}) => {
  switch (type) {
    case "Input":
      return <CustomInput />;
    case "Button":
      return <CustomButton />;
    case "Single Select Checkbox":
      return <CustomRadioButton />;
    case "Multi Select Checkbox":
      return <CustomCheckbox />;
    case "Single Select DropDown":
      return <CustomSelect />;
    case "Multi Select DropDown":
      return <CustomMultiSelect />;
    case "Uploader":
      return <CustomUploader />;
    case "Textarea":
      return <CustomTextArea />;
    case "Date":
      return <CustomDatePicker />;
    default:
      return <CustomInput  />;
  }
};

//when draged and droped to form this will create the Element
export const CreateElement:FC<CustomElementProps> = ({id,type}) => {
  const { updateFormElementIndex } = useFormState();
  const [{ isDragging }, drag] = useDrag({
    item: { id },
    type: "FORM_ELEMENT",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "FORM_ELEMENT",
    hover: (item: { id: number }) => {
      console.log(id && item.id !== id)
      if (id && item.id !== id) {
        console.log(id && item.id !== id)
        updateFormElementIndex(id as number, item.id);
      }
    },
  });
  const opacity = isDragging ? 0 : 1;


  return (
    <Flex
      ref={(node) => drag(drop(node))}
      gap={30}
      sx={(theme) => ({
        opacity,
        background:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[0],
        padding: theme.spacing.md,
        marginBottom: theme.spacing.xs,
        cursor: "grab",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: theme.radius.sm,
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
        // boxShadow: theme.shadows.sm,
        fontSize: theme.fontSizes.sm,

        // borderTop:
        //   isDragging &&
        //   `2px dashed ${
        //     theme.colorScheme === "dark"
        //       ? theme.colors.dark[2]
        //       : theme.colors.gray[4]
        //   }`,
        // borderBottom:
        //   isDragging &&
        //   `2px dashed ${
        //     theme.colorScheme === "dark"
        //       ? theme.colors.dark[2]
        //       : theme.colors.gray[4]
        //   }`,
      })}
    >
        <RenderComponent type={type} />
    </Flex>
  );
};
