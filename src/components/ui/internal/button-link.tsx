import { Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  link: string;
  text: string;
  icon?: boolean;
  bgColor?: string;
}

export default function ButtonLink({
  link,
  text,
  icon = true,
  bgColor = "primary-1",
}: Props) {
  return (
    <LinkBox
      width={"fit"}
      bgColor={bgColor}
      paddingY={10}
      rounded="xl"
      padding={"10px 20px"}
      justifyContent={"center"}
      textAlign="center"
      transition="all"
      _hover={{ backgroundColor: "primary-10" }}
    >
      <LinkOverlay
        href={link}
        color={"white"}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
          <Text fontSize={"md"}>{text}</Text>
          {icon && (
            <Icon
              icon={"material-symbols:arrow-forward-ios-rounded"}
              width={15}
              height={15}
            />
          )}
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}
