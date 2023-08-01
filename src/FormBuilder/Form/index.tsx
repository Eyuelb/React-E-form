import { Box } from "@mantine/core";
import { DndProvider } from "react-dnd";
import { CreateElement } from "../Utility";
import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import { useFormState } from "../Provider/FormContext";

export const DroppableFormArea: React.FC = () => {
  const { formList, addFormElement } = useFormState();

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data) {
      const droppedAttribute = JSON.parse(data);
      //save attribute to the new state
      addFormElement({ ...droppedAttribute, position: formList.length + 1 });
      //removeFormElement(droppedAttribute.id)
    }
  };

  return (
    <Box
      miw={"600px"}
      p={10}
      sx={{
        gap: "10px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        display: "flex",
        flexDirection: "column",
      }}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <DndProvider backend={HTML5Backend}>
        {formList.map((attribute) => (
          <CreateElement
            key={attribute.id}
            type={attribute.type}
            id={attribute.id}
          />
        ))}
      </DndProvider>
    </Box>
  );
};
