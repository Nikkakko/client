// styled.d.ts
import 'styled-components';

// theme for light and dark mode

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
  }
}
