import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  color: #fff;
`;

export const Button = styled.button`
  padding: 4px 8px;
  width: 100%
  max-width: 80px;
  min-width: 60px;

  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  color: black;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.875;
  letter-spacing: 0.06em;

  transition-property: color, background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);



  &:not(:last-child) {
    margin-right: 10px;
  }


  &:nth-child(1n) {


    &:hover {
      color: white;
      background-color: green;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }

  &:nth-child(2n) {


    &:hover {
      color: white;
      background-color: grey;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }

  &:nth-child(3n) {


    &:hover {
      color: white;
      background-color: red;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }
`;
