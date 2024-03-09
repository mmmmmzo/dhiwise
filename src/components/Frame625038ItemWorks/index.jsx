import React from "react";
import { Heading, Flex, Image } from "@chakra-ui/react";

export default function Frame625038ItemWorks({
  imagefortynine = "images/img_image_49_378x628.png",
  prop = "こんなのつくりましたよ!",
  prop1 = "ア●タケタブラ〜わ〜",
  ...props
}) {
  return (
    <Flex {...props}>
      <Flex bg="gray.200" w="100%" justifyContent="center" borderRadius="18px">
        <Image src={imagefortynine} w={{ md: "100%", base: "100%" }} borderRadius="18px" h="auto" />
      </Flex>
      <Flex gap="14px" w="100%" flexDirection="column" alignItems="start">
        <Heading size="lg" as="h1" color="black.900_01" ml={{ md: "1px", base: "0px" }} letterSpacing="1.00px">
          {prop}
        </Heading>
        <Heading size="s" color="black.900_8e" letterSpacing="1.00px">
          {prop1}
        </Heading>
      </Flex>
    </Flex>
  );
}
