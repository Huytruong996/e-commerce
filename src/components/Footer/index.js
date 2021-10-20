import React, { useState } from "react";
import { Container, Row, SectionContent } from "../../globalStyles";
import { Link } from "react-router-dom";
import {
  BoxText1,
  BoxText2,
  ButtonEmailSubmit,
  CopyRight,
  FooterBottom,
  FooterContent,
  FooterHomeWrap,
  FooterInner,
  FooterLogo,
  FooterMenu,
  FooterWidget,
  InputEmail,
  ListLi,
  ListUl,
  Logo,
  NewLetter,
  NewLetterContainer,
  NewLetterContent,
  NewLetterTitle,
  PaymentIcon,
  SubscribeForm,
  SupportBox1,
  SupportBox2,
  SvgLetter,
  TableRow,
  TitleMenu,
  WidgetLi,
  WidgetSocial,
  WidgetUl,
} from "./Footer.elements";
import { IMGLogo } from "../HeaderTop/HeaderTop.elements";

const FooterHome = () => {
  const [Active, setActive] = useState({ id: null, active: false });
  const handleActive = (id) => {
    if (Active.id === id && Active.active) {
      return setActive({ ...Active, active: false });
    }
    return setActive({ id: id, active: true });
  };
  return (
    <SectionContent>
      <FooterHomeWrap>
        <FooterContent>
          <NewLetterContent>
            <NewLetter>
              <Container>
                <NewLetterContainer>
                  <NewLetterTitle>
                    <SvgLetter viewBox="0 0 512 512">
                      <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z" />
                    </SvgLetter>
                    <span>Sign up to Newsletter</span>
                  </NewLetterTitle>
                  <p>
                    ...and receive
                    <span> $20 coupon for first shopping.</span>
                  </p>
                  <SubscribeForm>
                    <InputEmail
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <ButtonEmailSubmit>Subscribe</ButtonEmailSubmit>
                  </SubscribeForm>
                </NewLetterContainer>
              </Container>
            </NewLetter>
          </NewLetterContent>
          <FooterWidget>
            <FooterInner>
              <Row>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                  <FooterLogo>
                    <Logo>
                      <Link to="/">
                        <IMGLogo
                          src={require("../../images/logo.png").default}
                        />
                      </Link>
                    </Logo>
                    <SupportBox1>
                      <svg width="66" height="55" viewBox="0 0 67 64">
                        <path d="M32.256 0h2.88c5.824 0.768 11.712 3.008 15.808 7.296 3.84 3.904 5.888 9.152 6.848 14.464 1.024 0.832 2.112 1.728 2.816 2.88 1.984 0.704 3.776 2.048 4.8 3.904 1.088 1.92 1.6 4.032 1.984 6.080v2.88c-0.576 3.264-1.728 6.848-4.544 8.832-0.832 0.64-2.048 0.704-2.688 1.664-0.576 0.896-1.344 1.6-2.24 2.24-0.384 2.688-1.28 5.504-3.136 7.552-1.984 2.24-4.992 3.328-7.936 3.392-1.728 0.064-3.52-0.512-5.184 0.064-1.152 0.768-1.664 2.304-3.072 2.752h-7.744c-2.368-0.064-4.032-2.496-3.776-4.736 0.064-1.856 1.728-3.392 3.584-3.52 2.56-0.192 5.248-0.192 7.808 0.192 1.472 0.192 2.368 1.408 3.2 2.496 3.2 0.192 6.592 0.192 9.536-1.216 2.304-1.088 3.648-3.584 3.968-6.016 0.32-1.28-0.96-1.856-1.728-2.624-0.768-0.64-0.96-1.792-1.024-2.752-0.256-2.56 0-5.184 0.064-7.744 0.128-3.968-0.064-7.936 0.128-11.84 0.064-1.728 0.832-3.584 2.56-4.288-0.704-5.568-3.456-10.88-7.872-14.336-7.552-6.464-19.776-6.528-27.392-0.128-4.224 3.584-6.72 8.896-7.68 14.336 1.344 0.704 2.176 2.048 2.432 3.52 0.576 2.816 0.256 5.76 0.256 8.64-0.128 3.584 0.256 7.104 0.064 10.688-0.192 1.536-0.384 3.264-1.408 4.544-0.96 1.152-2.688 1.344-4.096 0.896-1.216-0.448-1.92-1.664-2.624-2.688-2.24-0.704-4.096-2.24-5.12-4.352-0.896-1.728-1.408-3.648-1.728-5.568v-2.88c0.384-2.112 0.896-4.224 1.984-6.080 1.024-1.92 2.88-3.264 4.928-3.904 0.448-1.28 1.664-2.048 2.688-2.88 0.96-5.504 3.2-11.008 7.296-14.976 4.16-3.968 9.728-6.016 15.36-6.784M9.792 24.832c-0.64 6.528-0.128 13.12-0.384 19.648-0.064 1.024 0.064 2.112 0.576 3.072 0.576-0.064 1.28 0.192 1.728-0.192 0.704-1.408 0.448-3.072 0.384-4.608 0-6.016 0.256-12.032-0.256-17.984-0.64-0.192-1.536-0.448-2.048 0.064M55.552 24.768c-0.576 6.656-0.128 13.312-0.384 20.032 0 0.832 0.128 1.792 0.512 2.56 0.448 0.384 1.152 0.128 1.664 0.192 0.832-1.472 0.576-3.2 0.576-4.8-0.064-6.016 0.256-12.032-0.32-18.048-0.704-0.192-1.408-0.256-2.048 0.064M3.584 31.104c-1.024 2.752-1.088 5.76-0.384 8.64 0.448 1.984 1.536 4.032 3.52 4.864-0.064-5.696 0.192-11.456-0.128-17.152-1.472 0.704-2.496 2.112-3.008 3.648M60.672 27.456c0.064 5.696-0.192 11.456 0.128 17.152 1.216-0.64 2.176-1.728 2.752-2.944 1.152-2.624 1.28-5.568 0.832-8.384-0.384-2.304-1.472-4.8-3.712-5.824M29.824 60.8c2.944 0.64 6.080 0.64 9.088 0 0.192-0.64 0.192-1.344 0-1.984-2.816-0.064-5.76-0.896-8.512-0.064-0.96 0.256-0.896 1.28-0.576 2.048z" />
                      </svg>
                      <BoxText1>
                        <span>Got questions? Call us 24/7!</span>
                        <span>(800) 8001-8588, (0600) 874 548</span>
                      </BoxText1>
                    </SupportBox1>
                    <SupportBox2>
                      <BoxText2>
                        <span>Contact info</span>
                        <span>
                          17 Princess Road, London, Greater London NW1 8JR, UK
                        </span>
                      </BoxText2>
                    </SupportBox2>
                    <WidgetSocial>
                      <WidgetUl>
                        <WidgetLi>
                          <Link to="/">
                            <title>Facebook</title>
                            <svg width="24" height="24" viewBox="0 0 37 64">
                              <path d="M34.24 0.448v9.408h-5.568q-3.072 0-4.16 1.28t-1.088 3.84v6.784h10.496l-1.408 10.56h-9.088v27.136h-10.944v-27.136h-9.088v-10.56h9.088v-7.808q0-6.656 3.712-10.304t9.92-3.648q5.248 0 8.128 0.448z"></path>
                            </svg>
                          </Link>
                        </WidgetLi>
                        <WidgetLi>
                          <Link to="/">
                            <title>Instagram</title>
                            <svg width="24" height="24" viewBox="0 0 55 64">
                              <path d="M44.16 32q0-1.664-0.384-3.2h11.264v22.016q0 3.584-2.496 6.144t-6.080 2.56h-37.888q-3.584 0-6.080-2.56t-2.496-6.144v-22.016h11.136q-0.256 2.048-0.256 3.2 0 6.784 4.864 11.712t11.776 4.928q6.784 0 11.712-4.928t4.928-11.712zM46.464 4.48q3.584 0 6.080 2.496t2.496 6.080v9.344h-13.952q-4.992-7.040-13.568-7.040-8.832 0-13.568 7.040h-13.952v-9.344q0-3.584 2.496-6.080t6.080-2.496h37.888zM50.56 15.104v-4.608q0-1.536-1.536-1.536h-4.608q-1.536 0-1.536 1.536v4.608q0 0.512 0.448 1.024t1.088 0.512h4.608q1.536 0 1.536-1.536zM37.76 32q0 4.224-3.008 7.232t-7.232 3.008-7.232-3.008-3.008-7.232q0-4.352 3.008-7.296t7.232-2.944 7.232 2.944 3.008 7.296z"></path>
                            </svg>
                          </Link>
                        </WidgetLi>
                        <WidgetLi>
                          <Link to="/">
                            <title>Facebook</title>
                            <svg width="24" height="24" viewBox="0 0 64 64">
                              <path d="M25.408 40.256l17.28-8.896-17.28-9.024v17.92zM32 9.472q6.016 0 11.584 0.192t8.192 0.32l2.624 0.128q0 0 0.576 0.064t0.832 0.128 0.832 0.128 1.024 0.32 1.024 0.448 1.088 0.704 1.024 0.96q0.256 0.192 0.576 0.64t1.024 2.112 0.96 3.584q0.256 2.304 0.448 4.864t0.192 4.096v6.272q0.064 5.184-0.64 10.368-0.256 1.92-0.896 3.52t-1.152 2.24l-0.512 0.576q-0.448 0.512-1.024 0.96t-1.088 0.64-1.024 0.448-1.024 0.32-0.832 0.128-0.832 0.128-0.576 0.064q-8.96 0.704-22.4 0.704-7.36-0.128-12.864-0.256t-7.104-0.256l-1.792-0.192-1.28-0.128q-1.28-0.192-1.92-0.32t-1.856-0.768-1.984-1.472q-0.256-0.192-0.576-0.64t-1.024-2.112-0.96-3.584q-0.256-2.304-0.448-4.864t-0.192-4.096v-6.272q-0.064-5.184 0.64-10.368 0.256-1.984 0.896-3.52t1.152-2.24l0.512-0.576q0.512-0.576 1.024-0.96t1.088-0.704 1.024-0.448 1.024-0.32 0.832-0.128 0.832-0.128 0.576-0.064q8.96-0.64 22.4-0.64z"></path>
                            </svg>
                          </Link>
                        </WidgetLi>
                        <WidgetLi>
                          <Link to="/">
                            <title>Twitter</title>
                            <svg width="24" height="24" viewBox="0 0 79 64">
                              <path d="M78.784 7.552q-3.264 4.928-8.064 8.384 0.064 0.896 0.064 2.048 0 6.528-1.92 12.992-1.856 6.528-5.76 12.48-3.904 5.888-9.28 10.496t-12.864 7.296q-7.552 2.752-16.192 2.752-13.44 0-24.768-7.232 1.984 0.192 3.84 0.192 11.264 0 20.096-6.912-5.248-0.128-9.408-3.264-4.096-3.136-5.696-8 1.536 0.32 3.072 0.32 2.176 0 4.224-0.576-5.568-1.088-9.28-5.568-3.648-4.416-3.648-10.24v-0.256q3.392 1.92 7.296 2.048-3.328-2.176-5.248-5.76-1.92-3.52-1.92-7.68 0-4.352 2.176-8.128 6.080 7.488 14.72 11.904 8.64 4.48 18.56 4.992-0.384-1.792-0.384-3.712 0-6.656 4.736-11.392t11.392-4.736q7.040 0 11.84 5.12 5.44-1.088 10.24-3.968-1.856 5.824-7.104 8.96 4.864-0.576 9.28-2.56z"></path>
                            </svg>
                          </Link>
                        </WidgetLi>
                      </WidgetUl>
                    </WidgetSocial>
                  </FooterLogo>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                  <FooterMenu>
                    <TitleMenu
                      onClick={() => handleActive(1)}
                      Active={Active.id === 1 && Active.active ? 1 : 0}
                    >
                      Find In Fast
                      <span>
                        <svg width="16" height="16" viewBox="0 0 41 64">
                          <path d="M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z"></path>
                        </svg>
                      </span>
                    </TitleMenu>
                    <ListUl Active={Active.id === 1 && Active.active ? 1 : 0}>
                      <ListLi>
                        <Link to="/">
                          <span>Accessories</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Gaming</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Laptops & Computer</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Mac Computers</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>PC Computers</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Ultrabooks</span>
                        </Link>
                      </ListLi>
                    </ListUl>
                  </FooterMenu>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                  <FooterMenu>
                    <TitleMenu
                      onClick={() => handleActive(2)}
                      Active={Active.id === 2 && Active.active ? 1 : 0}
                    >
                      Information
                      <span>
                        <svg width="16" height="16" viewBox="0 0 41 64">
                          <path d="M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z"></path>
                        </svg>
                      </span>
                    </TitleMenu>
                    <ListUl Active={Active.id === 2 && Active.active ? 1 : 0}>
                      <ListLi>
                        <Link to="/">
                          <span>About Us</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Contact Us</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>All Collections</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Privacy policy</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Terms & Conditions</span>
                        </Link>
                      </ListLi>
                    </ListUl>
                  </FooterMenu>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                  <FooterMenu>
                    <TitleMenu
                      onClick={() => handleActive(3)}
                      hidden
                      Active={Active.id === 3 && Active.active ? 1 : 0}
                    >
                      Customer Care
                      <span>
                        <svg width="16" height="16" viewBox="0 0 41 64">
                          <path d="M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z"></path>
                        </svg>
                      </span>
                    </TitleMenu>
                    <ListUl Active={Active.id === 3 && Active.active ? 1 : 0}>
                      <ListLi>
                        <Link to="/">
                          <span>Contact Us</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Wishlist</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Shipping & Return</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Terms & Conditions</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>FAQs</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>About Us</span>
                        </Link>
                      </ListLi>
                    </ListUl>
                  </FooterMenu>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                  <FooterMenu>
                    <TitleMenu
                      onClick={() => handleActive(4)}
                      Active={Active.id === 4 && Active.active ? 1 : 0}
                    >
                      In the Spotlight
                      <span>
                        <svg width="16" height="16" viewBox="0 0 41 64">
                          <path d="M38.4 26.304q0 0.448-0.384 0.768l-16.64 16.704q-0.32 0.32-0.832 0.32t-0.768-0.32l-16.64-16.704q-0.384-0.32-0.384-0.768t0.384-0.832l1.792-1.792q0.32-0.384 0.768-0.384t0.832 0.384l14.016 14.016 14.080-14.016q0.32-0.384 0.832-0.384t0.768 0.384l1.792 1.792q0.384 0.32 0.384 0.832z"></path>
                        </svg>
                      </span>
                    </TitleMenu>
                    <ListUl Active={Active.id === 4 && Active.active ? 1 : 0}>
                      <ListLi>
                        <Link to="/">
                          <span>Electronics</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Toys</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Video Games</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Home Products</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Clothing</span>
                        </Link>
                      </ListLi>
                      <ListLi>
                        <Link to="/">
                          <span>Sports & Outdoors</span>
                        </Link>
                      </ListLi>
                    </ListUl>
                  </FooterMenu>
                </div>
              </Row>
            </FooterInner>
          </FooterWidget>
          <FooterBottom>
            <Container>
              <TableRow>
                <CopyRight>
                  <p>
                    © 2021
                    <strong> Huy Truong</strong>. All Rights Reserved
                  </p>
                </CopyRight>
                <PaymentIcon>
                  <ul>
                    <li>
                      <img
                        src={
                          require("../../images/patment-icon-648x76_648x_85159418-2dd1-46fe-988c-39c81f26ab1a_324x.png")
                            .default
                        }
                      />
                    </li>
                  </ul>
                </PaymentIcon>
              </TableRow>
            </Container>
          </FooterBottom>
        </FooterContent>
      </FooterHomeWrap>
    </SectionContent>
  );
};

export default FooterHome;
