import { Box, Flex, SimpleGrid } from "@mantine/core";
import { AttributesWraperProps, CreateAttributeProps } from "../type";

export const AttributesWraper: React.FC<AttributesWraperProps> = ({
  children,
}) => {
  return (
    <SimpleGrid cols={2} spacing={1}>
      {children}
    </SimpleGrid>
  );
};

export const CreateAttribute: React.FC<CreateAttributeProps> = ({ attribute }) => {
    return (
      <Box
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", JSON.stringify(attribute));
        }}
        sx={(theme) => ({
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          padding: theme.spacing.sm,
          marginBottom: theme.spacing.xs,
          cursor: "grab",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: theme.radius.sm,
          boxShadow: theme.shadows.sm,
          fontSize: theme.fontSizes.xs,
          height: "45px",
  
          "-moz-drag-over": {
            borderTop: `2px dashed ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[4]
            }`,
            borderBottom: `2px dashed ${
              theme.colorScheme === "dark"
                ? theme.colors.dark[2]
                : theme.colors.gray[4]
            }`,
          },
        })}
      >
        <Flex align={"center"} gap={2} p={0} m={0}>
          {attribute.icon} {attribute.name}
        </Flex>
      </Box>
    );
  };