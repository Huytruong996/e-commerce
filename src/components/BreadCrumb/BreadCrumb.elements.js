import styled, { css } from "styled-components";

export const BreadCrumbWrap = styled.div``;

export const BreadCrumbItems = styled.ul`
  padding-left: 0;
  margin-left: -4px;
  height: 48px;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
`;

export const Item = styled.li`
  position: relative;
  display: table-cell;
  vertical-align: middle;
  font-size: 13px;
  font-weight: 400;
  height: 48px;
`;

export const TextItem = styled.span`
  a {
    display: inline-block;
    vertical-align: middle;
    color: #1a9cb7;
    padding: 0 4px;
    font-size: 14px;
    max-width: 200px;
    white-space: nowrap;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      vertical-align: middle;
    }
  }
  ${(props) =>
    props.last &&
    css`
      span {
        color: #757575;
        max-width: none;
        height: 16px;
        line-height: 16px;
      }
    `}
`;

export const BreadCrumbArrow = styled.div`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACKUExURUxpcYGBgYGBgYWFhYCAgICAgICAgIKCgv///4GBgZWVlYyMjIGBgYCAgIKCgoGBgYGBgaqqqoODg7+/v4GBgZKSko6OjoGBgYWFhYGBgYSEhIGBgZmZmYCAgIGBgYGBgYCAgICAgIGBgYCAgICAgIiIiICAgIeHh4GBgYSEhIODg4GBgYGBgYCAgPLijmAAAAAtdFJOUwCS7jCDi/E1AbYMFJrrK9ToAycEugcJtBfYG64Fp+S+vb+god0e4SLcHyPgwPJLUkAAAAB6SURBVDjLY2AYYoCdkwu/AgVdHTG8Crj5dUVE8aqQkNQVl8GrQkpDV1oYrwpVbV1ZQbwq1OV0lTnwqhAS0OXBr4KPV5cRf3AwM+myEghRNl0WihQQsoKQIwl5U0tOVwmfvKYa/qCWUsEfWYSim2CCkddVFKMs0Q5aAABM4wlSQJ87yAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;
