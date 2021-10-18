import React from "react";
import { Row } from "../../globalStyles";
import { HeaderMenuRightData } from "../Data";
import { HeaderMenuRightWrapper } from "../HeaderMenu/HeaderMenu.element";
import HeaderMenuRight from "../HeaderMenuRight";
import {
  HeaderHorizontalContent,
  HeaderHorizontalMenuWrapper,
  ItemMenu,
  ItemMenuHasChildren,
  ItemSubMenuLink,
  ItemSubMenuCategory,
  LiHorizontalMenu,
  ItemSubMenu,
  TitleMenuHasChildren,
  UlHorizontalMenu,
  SubMenu,
  UlSubMenu,
  LiSubMenu,
  SubMenuContent,
} from "./HeaderHorizontalMenu.elements";

const HeaderHorizontalMenu = ({ itemMenus }) => {
  return (
    <HeaderHorizontalMenuWrapper>
      <HeaderHorizontalContent>
        <UlHorizontalMenu>
          {itemMenus &&
            itemMenus.map((itemMenu, index) =>
              itemMenu.childrens.length > 0 ? (
                <LiHorizontalMenu key={index}>
                  <ItemMenuHasChildren to={itemMenu.url}>
                    <TitleMenuHasChildren>
                      {itemMenu.title}
                    </TitleMenuHasChildren>
                  </ItemMenuHasChildren>
                  <SubMenu>
                    <Row>
                      {itemMenu.childrens.map((children, index) => (
                        <ItemSubMenu key={index} className="col-lg-3">
                          <SubMenuContent>
                            <ItemSubMenuCategory to={itemMenu.url}>
                              <span>{children.category}</span>
                            </ItemSubMenuCategory>
                            <UlSubMenu>
                              {children.items.map((item, index) => (
                                <LiSubMenu key={index}>
                                  <ItemSubMenuLink to={item.url} key={index}>
                                    {item.name}
                                  </ItemSubMenuLink>
                                </LiSubMenu>
                              ))}
                            </UlSubMenu>
                          </SubMenuContent>
                        </ItemSubMenu>
                      ))}
                    </Row>
                  </SubMenu>
                </LiHorizontalMenu>
              ) : (
                <LiHorizontalMenu key={index}>
                  <ItemMenu to={itemMenu.url}>{itemMenu.title}</ItemMenu>
                </LiHorizontalMenu>
              )
            )}
        </UlHorizontalMenu>
      </HeaderHorizontalContent>
      <HeaderMenuRightWrapper>
        <HeaderMenuRight {...HeaderMenuRightData} />
      </HeaderMenuRightWrapper>
    </HeaderHorizontalMenuWrapper>
  );
};

export default HeaderHorizontalMenu;
