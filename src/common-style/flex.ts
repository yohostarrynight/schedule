import styled from 'styled-components';

interface FlexProps {
  alignCenter?: string;
  justifyContent?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${(props) => props.alignCenter};
  justify-content: ${(props) => props.justifyContent};
`;

export const CenterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
