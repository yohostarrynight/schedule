import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MenuBox, MenuItem } from './style';

interface MenuConfig {
  name: string;
  url: string;
  selected: boolean;
}

function Menu(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuList, setMenuList] = useState<MenuConfig[]>([
    { name: '任务列表', url: '/', selected: false },
    { name: '任务配置', url: '/addMission', selected: false },
  ]);
  useEffect(() => {
    setMenuList(
      [...menuList].map((menuItem) => ({
        ...menuItem,
        selected: menuItem.url === location.pathname,
      })),
    );
  }, [location, menuList]);
  return (
    <MenuBox>
      {menuList.map((menuItem) => {
        const { name, url, selected } = menuItem;
        return (
          <MenuItem onClick={() => navigate(url)} key={url} selected={selected}>
            {name}
          </MenuItem>
        );
      })}
    </MenuBox>
  );
}

export default Menu;
