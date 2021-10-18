import React from "react";
import { Link } from "react-router-dom";
import {
  CategoriesTitle,
  CategoriesVerticalMenu,
  ElementorColumn,
  ElementorContainer,
  ElementorListItem,
  ElementorSection,
  ElementorTitle,
  ElementorWrap,
  HeaderVerticalMenuWrapper,
  IconBar,
  ItemlMenu,
  LiListItem,
  LiVerticalMenu,
  LiVerticalMenuHasChildren,
  SubMenu,
  UlListItem,
  UlVerticalMenu,
  VerticalMenu,
} from "./HeaderVerticalMenu.elements";

const HeaderVerticalMenu = ({ itemMenus, isSticky }) => {
  return (
    <HeaderVerticalMenuWrapper>
      <CategoriesVerticalMenu>
        <CategoriesTitle>
          <IconBar />
          All Departments
        </CategoriesTitle>
        <VerticalMenu isSticky={isSticky}>
          <UlVerticalMenu>
            <LiVerticalMenu>
              <ItemlMenu to="/"> Best Seller</ItemlMenu>
            </LiVerticalMenu>
            <LiVerticalMenu>
              <ItemlMenu to="/">Top 100 Products</ItemlMenu>
            </LiVerticalMenu>
            <LiVerticalMenu>
              <ItemlMenu to="/"> Handpick By Digic</ItemlMenu>
            </LiVerticalMenu>
            {itemMenus &&
              itemMenus.map((itemMenu, index) =>
                itemMenu.childrens && itemMenu.childrens.length > 0 ? (
                  <LiVerticalMenuHasChildren key={index}>
                    <ItemlMenu to={itemMenu.url}>{itemMenu.name}</ItemlMenu>
                    <SubMenu>
                      <ElementorWrap url={itemMenu.backgroundSubMenu}>
                        <ElementorSection>
                          <ElementorContainer>
                            {itemMenu.childrens.map((children, index) => (
                              <ElementorColumn key={index}>
                                <ElementorTitle>{children.name}</ElementorTitle>
                                <ElementorListItem>
                                  <UlListItem>
                                    {children.childrens.map((item, index) => (
                                      <LiListItem key={index}>
                                        <Link to={item.url}>{item.name}</Link>
                                      </LiListItem>
                                    ))}
                                  </UlListItem>
                                </ElementorListItem>
                              </ElementorColumn>
                            ))}
                          </ElementorContainer>
                        </ElementorSection>
                      </ElementorWrap>
                    </SubMenu>
                  </LiVerticalMenuHasChildren>
                ) : (
                  <LiVerticalMenu key={index}>
                    <ItemlMenu to={itemMenu.url}>{itemMenu.name}</ItemlMenu>
                  </LiVerticalMenu>
                )
              )}
          </UlVerticalMenu>
        </VerticalMenu>
      </CategoriesVerticalMenu>
    </HeaderVerticalMenuWrapper>
  );
};

export default HeaderVerticalMenu;
