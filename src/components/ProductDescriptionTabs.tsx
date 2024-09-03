import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";


interface ProductDetailsProps {
    description: string;
    shipping: string;
    category?: string;
    tags?: string[];
    sellerName?: string;
    sellerRating?: number;
    inStock?: boolean;
}

export const ProductDescriptionTabs = ( props:ProductDetailsProps) => {
    return (
        <Tabs
            size="lg"
            align="center"
            variant="line"
            colorScheme="yellow"
        >
            <TabList>
                <Tab>Description</Tab>
                <Tab>Shipping</Tab>
                <Tab>Specification</Tab>
                <Tab>Reviews (0)</Tab>
                <Tab>Vendor Info</Tab>
                <Tab>More Products</Tab>
                <Tab>Product Enquiry</Tab>
            </TabList>

            <TabPanels textAlign="left">
                <TabPanel >
                    <p>{props.description}</p>
                </TabPanel>
                <TabPanel>
                    <p>{props.shipping}</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
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
};
