// import { Box, Flex, SimpleGrid, Text, rem } from "@mantine/core";
// import { Props, renderTaskProps } from "./type";
// // import  {IconTrash } from "@tabler/icons-react";
// import {
//   // addAttributeToForm,
//   handleDragStart,
//   handleDrop,
//   onDragOver,
//   onDragStart,
//   onDrop,
// } from "./handlers";
// import { CustomDatePicker, CustomInput, CustomRadioButton, CustomSelect, CustomTextArea, CustomUploader, CustomeButton } from "./components";
// interface RenderComponenProps {
//   componentType: string;
// }
// const RenderComponent: React.FC<RenderComponenProps> = ({ componentType }) => {
//   switch (componentType) {
//     case "Input":
//       return <CustomInput />;
//     case "Button":
//       return <CustomeButton />;
//     case "Radio":
//       return <CustomRadioButton />;
//     case "Select":
//       return <CustomSelect />;
//     case "Uploader":
//       return <CustomUploader />;
//     case "Textarea":
//       return <CustomTextArea />;
//     case "Date":
//       return <CustomDatePicker />;
//     // Add more cases for other genericName values and their respective components
//     default:
//       return <CustomInput />;
//   }
// };
// export const RenderMenu: React.FC<renderTaskProps> = ({
//   isLoading,
//   attributes,
// }: renderTaskProps) => {
//   if (isLoading) {
//     return (
//       <Box className="animate-pulse">
//         {/* Skeleton Loading */}
//         {/* ... */}
//       </Box>
//     );
//   }
//   return (
//     <SimpleGrid cols={2} spacing={10}>
//       {attributes
//         .filter((Attribute) => Attribute.viewBoxType === "Menu")
//         .map((Attribute) => (
//           <Box
//             key={Attribute.id}
//             onDragStart={(e) => onDragStart(e, Attribute.genericName)}
//             draggable
//             sx={(theme) => ({
//               display: "flex",
//               alignItems: "center",
//               borderRadius: theme.radius.xs,
//               border: `${rem(1)} solid ${
//                 theme.colorScheme === "dark"
//                   ? theme.colors.dark[5]
//                   : theme.colors.gray[2]
//               }`,
//               paddingLeft: `calc(${theme.spacing.xl} - ${theme.spacing.md})`, // to offset drag handle
//               backgroundColor:
//                 theme.colorScheme === "dark"
//                   ? theme.colors.dark[5]
//                   : theme.white,
//               marginBottom: theme.spacing.sm,
//               boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
//             })}
//           >
//             <Flex align={"center"} gap={5} p={0} m={0}>
//               {Attribute.icon}
//               {Attribute.name}
//             </Flex>
//           </Box>
//         ))}
//     </SimpleGrid>
//   );
// };
// export const RenderForm: React.FC<renderTaskProps> = ({
//   isLoading,
//   attributes,
//   setAttributes,
// }) => {
//   if (isLoading) {
//     return <Box className="animate-pulse">{/* Skeleton Loading */}</Box>;
//   }

//   return (
//     <Box>
//       {attributes.map(
//         (attribute) =>
//           attribute.viewBoxType === "Form" && (
//             <Box
//               id={attribute.id.toString()}
//               draggable
//               onDragStart={(ev) =>
//                 handleDragStart({
//                   ev,
//                   id: attribute.id.toString(),
//                 })
//               }
//               onDrop={(ev) =>
//                 handleDrop({
//                   ev,
//                   targetId: attribute.id,
//                   attributes,
//                   setAttributes,
//                 })
//               }
//               key={attribute.position}
//               sx={(theme) => ({
//                 background:
//                   theme.colorScheme === "dark"
//                     ? theme.colors.dark[5]
//                     : theme.colors.gray[0],
//                 padding: theme.spacing.sm,
//                 marginBottom: theme.spacing.xs,
//                 cursor: "grab",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: theme.radius.sm,
//                 boxShadow: theme.shadows.sm,
//                 fontSize: theme.fontSizes.sm,

//                 "-moz-drag-over": {
//                   borderTop: `2px dashed ${
//                     theme.colorScheme === "dark"
//                       ? theme.colors.dark[2]
//                       : theme.colors.gray[4]
//                   }`,
//                   borderBottom: `2px dashed ${
//                     theme.colorScheme === "dark"
//                       ? theme.colors.dark[2]
//                       : theme.colors.gray[4]
//                   }`,
//                 },
//               })}
//             >
//               <RenderComponent componentType={attribute.genericName} />
//               {/* {attribute.name} */}
//               {/* <IconTrash
//                 color="red"
//                 size={16}
//                 onClick={() =>
//                   addAttributeToForm({
//                     taskName: attribute.genericName,
//                     setAttributes,
//                     attributes,
//                   })
//                 }
//                 style={{
//                   borderRadius: "4px",
//                 }}
//               /> */}
//             </Box>
//           )
//       )}
//     </Box>
//   );
// };

// export const FormContainer: React.FC<Props> = ({
//   callBackState,
//   attributes,
//   setAttributes,
//   isLoading,
// }) => {
//   return (
//     <Flex
//       onDragOver={onDragOver}
//       onDrop={(e) =>
//         onDrop({ ev: e, renderType: "Form", attributes, setAttributes })
//       }
//       sx={{
//         width: "100%",
//         flex: "1 1 100%",
//         height: ["auto", "auto", "400px"],
//         flexDirection: "column",
//         padding: "1rem",
//         boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//         borderRadius: "4px",
//         overflow: "none",
//       }}
//     >
//       <Text size={18} sx={{ marginBottom: "1rem", fontFamily: "inherit" }}>
//         Form
//       </Text>
//       <RenderForm
//         viewBoxType={"Form"}
//         isLoading={isLoading}
//         attributes={attributes}
//         setAttributes={setAttributes}
//         callBackState={callBackState}
//       />
//     </Flex>
//   );
// };
// export const MenuContainer: React.FC<Props> = ({
//   callBackState,
//   attributes,
//   setAttributes,
//   isLoading,
// }) => {
//   return (
//     <Flex
//       onDragOver={onDragOver}
//       onDrop={(e) =>
//         onDrop({ ev: e, renderType: "Menu", attributes, setAttributes })
//       }
//       sx={{
//         width: "100%",
//         flex: "1 1 100%",
//         height: ["auto", "auto", "400px"],
//         flexDirection: "column",
//         padding: "1rem",
//         boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//         borderRadius: "4px",
//       }}
//     >
//       <Text size={18} sx={{ marginBottom: "1rem", fontFamily: "inherit" }}>
//         List of Attribute
//       </Text>
//       <RenderMenu
//         isLoading={isLoading}
//         attributes={attributes}
//         setAttributes={setAttributes}
//         callBackState={callBackState}
//       />
//     </Flex>
//   );
// };
