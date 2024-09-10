import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import {SpecificiationTable} from "./SpecificationTable.tsx";
import {VendorInfo} from "./VendorInfo.tsx";


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
            className=""
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

            <TabPanels >
                <TabPanel  textAlign={"start"}>
                    <p>{props.description}</p>
                </TabPanel>
                <TabPanel>
                    <p>{props.shipping}</p>
                </TabPanel>
                <TabPanel display="flex" justifyContent="center" alignItems="center">
                    <SpecificiationTable />
                </TabPanel>
                <TabPanel>
                   Reviews!
                </TabPanel>
                <TabPanel display="flex" justifyContent="center" alignItems="center">
                    <VendorInfo />
                </TabPanel>
                <TabPanel>
                    <p> more </p>
                </TabPanel>
                <TabPanel>
               </TabPanel>
            </TabPanels>
        </Tabs>
    );
};
