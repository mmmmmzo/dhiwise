import React from "react";
import { Text, Flex, Heading } from "@chakra-ui/react";

export default function Frame625038ListItem({
  h52022one,
  h4,
  p = "求人系のサービス「ここほれワンワン」の企画に携わっていました。何たらというポジションで企画制作を、10人ほどのチームのリーダとして務めました",
  ...props
}) {
  return (
    <Flex {...props}>
      <Flex w="100%" flexDirection="column" alignItems="start">
        <Flex w={{ md: "39%", base: "100%" }} justifyContent="space-between" alignItems="start">
          {!!h52022one ? (
            <Heading as="h1" letterSpacing="1.00px">
              {h52022one}
            </Heading>
          ) : null}
          {!!h4 ? (
            <Heading letterSpacing="1.00px" fontWeight={600}>
              {h4}
            </Heading>
          ) : null}
        </Flex>
        <Flex
          mt="-23px"
          borderColor="gray.200_01"
          borderBottomWidth="1px"
          borderStyle="solid"
          justifyContent="flex-end"
          py={{ md: "24px", base: "20px" }}
          w="100%"
        >
          <Text mt="16px" letterSpacing="1.00px" w="80%">
            {p}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
