import React from "react";
import { Link } from "react-router-dom";
import {
  BreadCrumbArrow,
  BreadCrumbItems,
  BreadCrumbWrap,
  Item,
  TextItem,
} from "./BreadCrumb.elements";

const BreadCrumb = () => {
  return (
    <BreadCrumbWrap>
      <BreadCrumbItems>
        <Item>
          <TextItem>
            <Link to="#">
              <span>Electronics Accessories</span>
            </Link>
            <BreadCrumbArrow />
          </TextItem>
        </Item>
        <Item>
          <TextItem>
            <Link to="#">
              <span>Phụ kiện điện thoại & máy tính bảng</span>
            </Link>
            <BreadCrumbArrow />
          </TextItem>
        </Item>
        <Item>
          <TextItem>
            <Link to="#">
              <span>Electronics Accessories</span>
            </Link>
            <BreadCrumbArrow />
          </TextItem>
        </Item>
        <Item>
          <TextItem last>
            <span>Phụ kiện điện thoại & máy tính bảng</span>
          </TextItem>
        </Item>
      </BreadCrumbItems>
    </BreadCrumbWrap>
  );
};

export default BreadCrumb;
