import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText,
  StyledSocialLinks,
  StyledToolsContainer,
  StyledParagraph,
  ParagraphWrapper,
  StyledListItemNew
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1000px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          <Box display={["none", null, "block"]}>
           {/* <LogoWithTextIcon isDark={false} width="160px" />  */}
            <StyledList>
            <StyledListItem><LogoWithTextIcon isDark={false} width="160px" /></StyledListItem>
              <StyledListItemNew>
                <StyledSocialLinks order={[2]} pb={["22px", null, "12px"]} mb={["0", null, "12px"]} /> 
              </StyledListItemNew>
              <StyledListItemNew>
                <StyledText> Copyright © 2022 DEXO. All Rights Reserved.</StyledText>
              </StyledListItemNew>
              </StyledList>
          </Box>
          
        {/*  <StyledList>
              <StyledListItem>
                <StyledSocialLinks order={[2]} pb={["22px", null, "32px"]} mb={["0", null, "32px"]} /> 
              </StyledListItem>
              <StyledListItem>
                <StyledParagraph> Copyright © 2022 DEXO. All Rights Reserved.</StyledParagraph>
              </StyledListItem>
              </StyledList> */}
          
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : darkColors.grey}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
        </Flex>
    {/*    <StyledSocialLinks order={[2]} pb={["22px", null, "32px"]} mb={["0", null, "32px"]} />  */}
                
      </Flex>
     {/*   <ParagraphWrapper>
                  <StyledParagraph> Copyright © 2022 DEXO. All Rights Reserved.</StyledParagraph> 
                  </ParagraphWrapper>   */}
    </StyledFooter>
  );
};

export default MenuItem;






