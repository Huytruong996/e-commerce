import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";
import {
  Content,
  SectionContainer,
  ShopifySectionMobileWrap,
  UlListIcon,
} from "./ShopifySectionMobile.elements";

const ShopifySectionMobile = () => {
  return (
    <ShopifySectionMobileWrap>
      <Content>
        <SectionContainer>
          <UlListIcon>
            <li>
              <Link to="/">
                <svg viewBox="0 0 640 512">
                  <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                </svg>
                <span>Computer</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg viewBox="0 0 512 512">
                  <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
                </svg>
                <span>Cameras</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg viewBox="0 0 320 512">
                  <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                </svg>
                <span>Mobiles</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg viewBox="0 0 640 512">
                  <path d="M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"></path>
                </svg>
                <span>TV & Audio</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg viewBox="0 0 640 512">
                  <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path>
                </svg>
                <span>Gaming</span>
              </Link>
            </li>
          </UlListIcon>
        </SectionContainer>
      </Content>
    </ShopifySectionMobileWrap>
  );
};

export default ShopifySectionMobile;
