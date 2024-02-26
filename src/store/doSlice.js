import { createSlice } from '@reduxjs/toolkit';

const doSlice = createSlice({
    name: 'appData',
    initialState: {
      imagePath: require('../components/img/logo.png'),
      menuList: [
        { text: 'Menu 1', url: window.location.href },
        { text: 'Menu 2', url: 'https://example.com/menu1' },
        { text: 'Menu 3', url: window.location },
        { text: 'Menu 4', url: 'https://example.com/menu2' },
      ],
    },
});

export const selectLogoPath = (state) => state.logo.imagePath;
export const selectMenuList = (state) => state.logo.menuList;

export default doSlice.reducer;