import React, { useState } from "react";
import { Container, SectionContent, TabSection } from "../../globalStyles";
import Product from "../Product";
import SpecialProductV2 from "../SpecialProductV2";
import {
  BlockProductRow,
  LinkItem,
  NavItem,
  NavTab,
  NavTabWrapper,
  ProductItem,
  TabContent,
  TabPanel,
  TabPanelRow,
  TabPanelWrapper,
  TabProduct,
  TabSpecial,
} from "./ProductSectionV2.elements";

const ProductSectionV2 = ({ datas }) => {
  const [active, setActive] = useState(1);
  return (
    <SectionContent>
      <TabSection style={{ backgroundColor: "#f9f9f9" }}>
        <Container>
          <NavTabWrapper>
            <NavTab>
              {datas &&
                datas.map((data, index) => (
                  <NavItem key={index}>
                    <LinkItem
                      to="/"
                      onClick={() => setActive(data.id)}
                      active={active === data.id ? 1 : 0}
                    >
                      {data.Tabname}
                    </LinkItem>
                  </NavItem>
                ))}
            </NavTab>
          </NavTabWrapper>
          <TabContent>
            {datas &&
              datas.map((data, index) => (
                <TabPanel key={index} active={active === data.id ? 1 : 0}>
                  <TabPanelWrapper>
                    <TabPanelRow>
                      <TabProduct className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <BlockProductRow>
                          {data.ProductsLeft.map((product, index) => {
                            return (
                              <ProductItem
                                key={index}
                                className="col-lg-6 col-md-3 col-sm-6 col-12"
                              >
                                <Product {...product} />
                              </ProductItem>
                            );
                          })}
                        </BlockProductRow>
                      </TabProduct>
                      <TabSpecial className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <SpecialProductV2 {...data.ProductSpecial} />
                      </TabSpecial>
                      <TabProduct className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <BlockProductRow>
                          {data.ProductsRight.map((product, index) => {
                            return (
                              <ProductItem
                                key={index}
                                className="col-lg-6 col-md-3 col-sm-6 col-12"
                              >
                                <Product {...product} />
                              </ProductItem>
                            );
                          })}
                        </BlockProductRow>
                      </TabProduct>
                    </TabPanelRow>
                  </TabPanelWrapper>
                </TabPanel>
              ))}
          </TabContent>
        </Container>
      </TabSection>
    </SectionContent>
  );
};

export default ProductSectionV2;
