import { Attribute } from "./type";
import {
    IconCalendar,
    IconChartArea,
    IconCheckbox,
    IconChecklist,
    IconColorPicker,
    IconSelector,
    IconUpload,
    IconWriting,
  } from "@tabler/icons-react";
// Mock data array for UI elements
export const mockUIData: Attribute[] = [
    {
      name: "Single Line Text",
      type: "Input",
      icon: <IconWriting size="1rem" stroke={3} />,
      position: 0,
      id:1
    },
    {
      name: "Multi Line Text",
      type: "Textarea",
      icon: <IconChartArea size="1rem" stroke={3} />,
      position: 1,
      id:2,
    },
    {
      name: "Single Select Checkbox",
      type: "Single Select Checkbox",
      icon: <IconCheckbox size="1rem" stroke={3} />,
      position: 2,
      id:3
    },
    {
      name: "Multi Select Checkbox",
      type: "Multi Select Checkbox",
      icon: <IconChecklist size="1rem" stroke={3} />,
      position: 3,
      id:4
    },
    {
      name: "Single Select DropDown",
      type: "Single Select DropDown",
      icon: <IconChecklist size="1rem" stroke={3} />,
      position: 4,
      id:5
    },
    {
      name: "Multi Select DropDown",
      type: "Multi Select DropDown",
      icon: <IconSelector size="1rem" stroke={3} />,
      position: 5,
      id:6
    },
    {
      name: "Submit Button",
      type: "Button",
      icon: <IconUpload size="1rem" stroke={3} />,
      position: 6,
      id:7
    },
  
    {
      name: "Date Picker",
      type: "Date",
      icon: <IconCalendar size="1rem" stroke={3} />,
      position: 7,
      id:8
    },
    {
      name: "Attachment file",
      type: "Uploader",
      icon: <IconCalendar size="1rem" stroke={3} />,
      position: 8,
      id:9
    },
    {
      name: "Color Picker",
      type: "Color",
      icon: <IconColorPicker size="1rem" stroke={3} />,
      position: 9,
      id:10
    },
  ];