import { Flex, Grid, useColorMode } from "@chakra-ui/react";
import { MenuButtonOption, SideMenu } from "src/components/SideMenu";
import { colors } from "styles/Theme/colors";

interface SideMenuLayoutProps {
  menuButtonOptions: MenuButtonOption[];
  children: React.ReactNode;
}

const gaps = [2, 3, 4, 5, 6];

export const SideMenuLayout = (props: SideMenuLayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      backgroundColor={colorMode === "light" ? colors.light.bg : colors.dark.bg}
      gridTemplateColumns="min-content 1fr"
      gap={gaps}
      p={gaps}
    >
      <SideMenu buttonOptions={props.menuButtonOptions} />
      <Flex direction="column" gap="8">
        {props.children}
      </Flex>
    </Grid>
  );
};
