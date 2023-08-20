import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function TabBody() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="green">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabBody;
