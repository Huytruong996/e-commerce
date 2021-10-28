import React, { useState } from "react";
import {
  BoxSpecific,
  ContentHighLight,
  ContentMain,
  ContentSpecific,
  ContentSpecify,
  ContentWrap,
  DetailDescriptionWrap,
  ExpandButton,
  ExpandSection,
  Key,
  MainSpecific,
  SpecificKeys,
  TitleContent,
  TitleKey,
  TitleSpecific,
  ValueKey,
} from "./DetailDescription.elements";

const DetailDescription = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <DetailDescriptionWrap>
      <TitleContent>Mô tả sản phẩm</TitleContent>
      <ContentWrap
        className={
          viewMore ? " blur-up lazyload " : " limit  blur-up lazyload "
        }
      >
        <ContentHighLight>
          <ul>
            <li>
              1. Kích thước: 9*6*0.8cm (Hộp lưu trữ), Chiều dài cáp: 28cm, tổng
              khối lượng: 45g
            </li>
            <li>2. Bộ có chứa:</li>
            <li>--- Cáp Type-C đến Type-C * 1;</li>
            <li>--- Bộ chuyển đổi Micro sang Type-C * 1;</li>
            <li>--- Bộ chuyển đổi Lightning sang Type-C * 1;</li>
            <li>--- Bộ chuyển đổi USB sang Type-C * 1;</li>
            <li>--- Pin thẻ điện thoại di động * 1</li>
            <li>
              3. bằng cách lắp ráp và kết hợp có thể được sử dụng cho điện thoại
              giao diện Type-C, máy tính xách tay, sạc điện thoại di động
              Lightning / Micro và truyền dữ liệu, tối đa 3A hiện tại
            </li>
            <li>
              4. Ngoài chức năng lưu trữ của hộp, mặt sau cũng có thể được sử
              dụng làm giá để điện thoại di động
            </li>
            <li>
              5. Các chức năng khác nhau, nhẹ và di động, thuận tiện cho khách
              du lịch trong chuyến công tác
            </li>
          </ul>
        </ContentHighLight>
        <ContentMain>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong style={{ fontFamily: "none" }}>Kho Báu</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong>Du lịch không lo lắng</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>Kết hợp hộp đựng và cáp có thể dùng làm giá đỡ.</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>---- Hỗ trợ sạc nhanh và truyền dữ liệu</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>---- Bảo vệ sạc</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>---- Đầu ra tối đa 3A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>---- Mini &amp; xách tay</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <div
            style={{
              width: "790.0px",
              height: "1649.0px",
              margin: 0,
              padding: "8.0px 0",
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                width: "790.0px",
                height: "1649.0px",
                display: "block",
                margin: 0,
                padding: "8.0px 0",
                whiteSpace: "pre-wrap",
              }}
            >
              <div
                style={{
                  width: "790.0px",
                  height: "1649.0px",
                  display: "block",
                  margin: 0,
                  padding: "8.0px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    width: "790.0px",
                    height: "1649.0px",
                    display: "block",
                    margin: 0,
                    padding: "8.0px 0",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <div
                    style={{
                      width: "790.0px",
                      height: "1649.0px",
                      display: "block",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "790.0px",
                        height: "1649.0px",
                        display: "block",
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "790.0px",
                          height: "1649.0px",
                          display: "block",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "790.0px",
                            height: "1649.0px",
                            display: "block",
                            margin: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "790.0px",
                              height: "1649.0px",
                              display: "block",
                            }}
                          >
                            <img
                              style={{
                                width: "790.0px",
                                height: "1649.0px",
                                display: "block",
                              }}
                              src="https://my-live-05.slatic.net/p/583905e7cd808b98476b17a2c47ba0c8.jpg_2200x2200q80.jpg_.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong>Một cho tất cả hiệu quả</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>
              Chuyển đổi giao diện lightning, micro, USB, Type-C cho máy tính
              xách tay, điện thoại di động, sạc và truyền dữ liệu
            </span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>Các tính năng của bộ sạc bao gồm:</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>Loại C đến loại C 3.0A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>Type-C sang Micro USB 3.0A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>Type-C sang Lightning 2.4A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>USB sang Lightning 2.4A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>USB sang Micro USB 3.0A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>USB sang loại C 3.0A</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <div
            style={{
              width: "790.0px",
              height: "1349.0px",
              margin: 0,
              padding: "8.0px 0",
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                width: "790.0px",
                height: "1349.0px",
                display: "block",
                margin: 0,
                padding: "8.0px 0",
                whiteSpace: "pre-wrap",
              }}
            >
              <div
                style={{
                  width: "790.0px",
                  height: "1349.0px",
                  display: "block",
                  margin: 0,
                  padding: "8.0px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    width: "790.0px",
                    height: "1349.0px",
                    display: "block",
                    margin: 0,
                    padding: "8.0px 0",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <div
                    style={{
                      width: "790.0px",
                      height: "1349.0px",
                      display: "block",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "790.0px",
                        height: "1349.0px",
                        display: "block",
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "790.0px",
                          height: "1349.0px",
                          display: "block",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "790.0px",
                            height: "1349.0px",
                            display: "block",
                            margin: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "790.0px",
                              height: "1349.0px",
                              display: "block",
                            }}
                          >
                            <img
                              style={{
                                width: "790.0px",
                                height: "1349.0px",
                                display: "block",
                              }}
                              src="https://my-live-05.slatic.net/p/026c6cf9ce5a293709a62d2446aab7c6.jpg_2200x2200q80.jpg_.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong>Chức năng đứng điện thoại xem dễ dàng</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>
              Được thiết kế với giá đỡ điện thoại ở mặt sau, thuận tiện cho việc
              cất giữ và đi lại
            </span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>0.8cm siêu mỏng</span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>
              Kích thước thẻ tín dụng, có thể dễ dàng cất giữ mà không chiếm
              không gian, ví
            </span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <div
            style={{
              width: "790.0px",
              height: "1350.0px",
              margin: 0,
              padding: "8.0px 0",
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                width: "790.0px",
                height: "1350.0px",
                display: "block",
                margin: 0,
                padding: "8.0px 0",
                whiteSpace: "pre-wrap",
              }}
            >
              <div
                style={{
                  width: "790.0px",
                  height: "1350.0px",
                  display: "block",
                  margin: 0,
                  padding: "8.0px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    width: "790.0px",
                    height: "1350.0px",
                    display: "block",
                    margin: 0,
                    padding: "8.0px 0",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <div
                    style={{
                      width: "790.0px",
                      height: "1350.0px",
                      display: "block",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "790.0px",
                        height: "1350.0px",
                        display: "block",
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "790.0px",
                          height: "1350.0px",
                          display: "block",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "790.0px",
                            height: "1350.0px",
                            display: "block",
                            margin: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "790.0px",
                              height: "1350.0px",
                              display: "block",
                            }}
                          >
                            <img
                              style={{
                                width: "790.0px",
                                height: "1350.0px",
                                display: "block",
                              }}
                              src="https://my-live-05.slatic.net/p/e4001de0525256d988060aa4420bd4c7.jpg_2200x2200q80.jpg_.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong>Danh sách phụ kiện</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <strong>Hướng dẫn sử dụng</strong>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span>
              Muli, siêu mỏng, cáp sạc, hộp lưu trữ, lưu trữ hoàn hảo, dễ dàng
              đi lại
            </span>
          </p>
          <p style={{ margin: 0, padding: "8.0px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
          <div
            style={{
              width: "790.0px",
              height: "1353.0px",
              margin: 0,
              padding: "8.0px 0",
              whiteSpace: "pre-wrap",
            }}
          >
            <div
              style={{
                width: "790.0px",
                height: "1353.0px",
                display: "block",
                margin: 0,
                padding: "8.0px 0",
                whiteSpace: "pre-wrap",
              }}
            >
              <div
                style={{
                  width: "790.0px",
                  height: "1353.0px",
                  display: "block",
                  margin: 0,
                  padding: "8.0px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                <div
                  style={{
                    width: "790.0px",
                    height: "1353.0px",
                    display: "block",
                    margin: 0,
                    padding: "8.0px 0",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <div
                    style={{
                      width: "790.0px",
                      height: "1353.0px",
                      display: "block",
                      margin: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "790.0px",
                        height: "1353.0px",
                        display: "block",
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          width: "790.0px",
                          height: "1353.0px",
                          display: "block",
                          margin: 0,
                        }}
                      >
                        <div
                          style={{
                            width: "790.0px",
                            height: "1353.0px",
                            display: "block",
                            margin: 0,
                          }}
                        >
                          <div
                            style={{
                              width: "790.0px",
                              height: "1353.0px",
                              display: "block",
                            }}
                          >
                            <img
                              style={{
                                width: "790.0px",
                                height: "1353.0px",
                                display: "block",
                              }}
                              src="https://my-live-05.slatic.net/p/63ec724fb116c8ce19434d0eb3e2cb97.jpg_2200x2200q80.jpg_.webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: 0, padding: "20px 0", whiteSpace: "pre-wrap" }}>
            <span />
          </p>
        </ContentMain>
        <ContentSpecific>
          <TitleSpecific>
            Đặc tính sản phẩm Bộ Dụng Cụ Sạc HOCO Gồm Cáp Sạc Nhanh 3A Type C
            Sang Type-C Bộ Chuyển Đổi Micro Sang Type-C/Lightning Sang
            Type-C/USB Sang Type-C Và Ghim Mở Thẻ Điện Thoại Di Động Có Hộp Đựng
            Dành Cho Máy Tính Xách Tay Điện thoại Android/IOS
          </TitleSpecific>
          <MainSpecific>
            <SpecificKeys>
              <Key>
                <TitleKey>Thương hiệu</TitleKey>
                <ValueKey>Hoco</ValueKey>
              </Key>

              <Key>
                <TitleKey>Tốc Độ Truyền Dữ Liệu</TitleKey>
                <ValueKey>USB3.1 Gen1: 0-5Gbps</ValueKey>
              </Key>
              <Key>
                <TitleKey>Loại Bảo Hành</TitleKey>
                <ValueKey>Loại Bảo Hành</ValueKey>
              </Key>
              <Key>
                <TitleKey>SKU</TitleKey>
                <ValueKey>735204980_VNAMZ-1887614150</ValueKey>
              </Key>
              <Key>
                <TitleKey>Thời gian bảo hành</TitleKey>
                <ValueKey>6 tháng</ValueKey>
              </Key>
              <Key>
                <TitleKey>Dòng sản phẩm</TitleKey>
                <ValueKey>U96</ValueKey>
              </Key>
            </SpecificKeys>
          </MainSpecific>
          <BoxSpecific>
            <TitleKey>Bộ sản phẩm gồm</TitleKey>
            <ValueKey>U96</ValueKey>
          </BoxSpecific>
        </ContentSpecific>
      </ContentWrap>
      <ExpandSection onClick={() => setViewMore(!viewMore)}>
        <ExpandButton>{viewMore ? "THU GỌN" : "XEM THÊM"}</ExpandButton>
      </ExpandSection>
    </DetailDescriptionWrap>
  );
};

export default DetailDescription;
