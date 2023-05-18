import { create } from 'zustand';
import { lightTheme, darkTheme } from '../styles/theme';
import { dataTypes } from '../types';
import data from '../db/data.json';

interface Store {
  theme: typeof lightTheme | typeof darkTheme;
  toggleTheme: () => void;
}

interface DataStore {
  data: dataTypes[];
}

export const useThemeStore = create<Store>(set => ({
  theme: darkTheme,
  toggleTheme: () =>
    set(state => ({
      theme: state.theme === lightTheme ? darkTheme : lightTheme,
    })),
}));

export const useDataStore = create<DataStore>(set => ({
  data: data,
}));
