import { create } from 'zustand';
import { lightTheme, darkTheme } from '../styles/theme';
import { dataTypes } from '../types';
import data from '../db/data.json';

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
  data: data,
  isSidebarOpen: false,
  toggleSidebar: () => set(state => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
  selectedData: data[0],
  setSelectedData: (item: dataTypes) =>
    set({ selectedData: item, isSidebarOpen: false }),

  removeData: (name: string) =>
    set(state => ({
      data: state.data.filter(item => item.name !== name),
      selectedData: state.data.filter(item => item.name !== name)[0],
    })),

  onContentChange: (name: string, content: string) => {
    set(state => ({
      data: state.data.map(item =>
        item.name === name ? { ...item, content: content } : item
      ),
      selectedData: { ...state.selectedData, content: content },
    }));
  },
}));
