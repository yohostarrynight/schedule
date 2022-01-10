import styled from 'styled-components';

interface MenuProps {
  selected: boolean;
}

export const MenuBox = styled.div`
  height: 100vh;
  width: 250px;
  background: #f7f8fa;
  font-size: 20px;
  @media (max-width: 1000px) {
    width: 200px;
  }
`;

export const MenuItem = styled.div<MenuProps>`
  cursor: pointer;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: ${(props) => (props.selected ? '#ffffff' : '#f7f8fa')};
  color: ${(props) => (props.selected ? '#00a4ff' : '#666')};
`;
