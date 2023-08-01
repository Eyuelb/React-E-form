import { MantineProvider, MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
};

interface ThemeProviderProps {
  children: React.ReactNode;
} 

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider  withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
 