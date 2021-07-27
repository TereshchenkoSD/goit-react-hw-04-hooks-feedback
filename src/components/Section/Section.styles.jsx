import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;
