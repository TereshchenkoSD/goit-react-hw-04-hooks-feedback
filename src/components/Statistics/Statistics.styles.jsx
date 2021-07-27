import styled from '@emotion/styled';

export const List = styled.ul``;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.875;
  letter-spacing: 0.06em;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:first-child {
    color: green;
  }

  &:nth-child(2n) {
    color: grey;
  }

  &:nth-last-child(3n) {
    color: red;
  }

  &:nth-last-child(-n + 2) {
    color: black;
  }
`;
