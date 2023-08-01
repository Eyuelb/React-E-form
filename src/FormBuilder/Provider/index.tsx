import React from "react";
import { Attribute } from "../type";
import { mockUIData } from "../mockData";
import { Container, Flex, Text } from "@mantine/core";
import { CreateAttribute,AttributesWraper } from "../Menu";
import { DroppableFormArea } from "../Form";

export const ProvideFormBuilder: React.FC = () => {
    const [attributeList] = React.useState<Attribute[]>(mockUIData);  
    // React.useEffect(() => {
    //   console.log(formList);
    //   console.log(attributeList);
  
    //   return () => {
    //     console.log("====");
    //   };
    // }, [formList, attributeList]);
  
    return (
      <Container>
        <Text size={25} weight={600}>
          Form Builder
        </Text>
        <Flex
          align={"flex-start"}
          gap={10}
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            borderRadius: "4px",
            padding: "1rem",
            width: "100%",
          }}
        >
          <Flex maw={"600px"} mih={"600px"}>
            <DroppableFormArea />
          </Flex>
  
          <Flex maw={"300px"} mih={"300px"}>
            <AttributesWraper>
              {attributeList.map((attribute, key) => (
                <CreateAttribute key={key} attribute={attribute} />
              ))}
            </AttributesWraper>
          </Flex>
        </Flex>
      </Container>
    );
  };