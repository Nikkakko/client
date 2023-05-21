import { create } from 'zustand';
import { lightTheme, darkTheme } from '../styles/theme';
import { dataTypes } from '../types';
import data from '../db/data.json';

//get data from local storage
const localData = localStorage.getItem('data');

interface Store {
  theme: typeof lightTheme | typeof darkTheme;
  themeName: string;
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
}

interface DataStore {
  data: dataTypes[];
  selectedData: dataTypes;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setSelectedData: (item: dataTypes) => void;
  removeData: (name: string) => void;
  onContentChange: (name: string, content: string) => void;
  onTitleChange: (name: string, title: string) => void;
  onSave: (name: string) => void;
  createNewData: () => void;
}

export const useThemeStore = create<Store>(set => ({
  theme: darkTheme,
  themeName: 'dark',
  toggleTheme: () =>
    set(state => ({
      theme: state.theme === lightTheme ? darkTheme : lightTheme,
    })),

  setTheme: (theme: string) =>
    set(state => ({
      themeName: theme === 'light' ? 'light' : 'dark',
      theme: theme === 'light' ? lightTheme : darkTheme,
    })),
}));

export const useDataStore = create<DataStore>(set => ({
  data: localData ? JSON.parse(localData) : data,
  isSidebarOpen: false,
  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  selectedData: localData ? JSON.parse(localData)[0] : data[0],
  setSelectedData: (item: dataTypes) =>
    set({ selectedData: item, isSidebarOpen: false }),

  removeData: (name: string) =>
    set(state => {
      const newData = state.data.filter(item => item.name !== name);
      const newSelectedDatas = newData[0];

      localStorage.setItem('data', JSON.stringify(newData));

      return {
        data: newData,
        selectedData: newSelectedDatas,
      };
    }),

  createNewData: () => {
    set(state => {
      const newData = [
        ...state.data,
        {
          createdAt: new Date().toISOString(),
          name: 'Untitled.md',
          content: '',
        },
      ];

      localStorage.setItem('data', JSON.stringify(newData));

      return {
        data: newData,
        selectedData: newData[newData.length - 1],
      };
    });
  },

  onContentChange: (name: string, content: string) => {
    set(state => ({
      data: state.data.map(item =>
        item.name === name ? { ...item, content: content } : item
      ),
      selectedData: { ...state.selectedData, content: content },
    }));
  },

  onTitleChange: (name: string, title: string) => {
    set(state => ({
      data: state.data.map(item =>
        item.name === name ? { ...item, name: title } : item
      ),
      selectedData: { ...state.selectedData, name: title },
    }));
  },

  onSave: (name: string) => {
    // Add .md extension to name
    let updatedName = name + '.md';

    if (name.includes('.md')) return;

    if (name === '') {
      updatedName = 'Untitled.md';
    }

    // Remove spaces from name
    updatedName = updatedName.replace(/\s/g, '');

    set(state => {
      // Update the data
      const updatedData = state.data.map(item =>
        item.name === name ? { ...item, name: updatedName } : item
      );

      // Update the selectedData
      const updatedSelectedData = {
        ...state.selectedData,
        name: updatedName,
      };

      // Save updated data to localStorage
      localStorage.setItem('data', JSON.stringify(updatedData));

      return {
        data: updatedData,
        selectedData: updatedSelectedData,
      };
    });
  },
}));
