import { useState, useMemo } from 'react';
import styled from 'styled-components';
import IconLight from '../svgs/IconLight';
import IconDark from '../svgs/IconDark';
import Switch from 'react-switch';
import { useThemeStore } from '../app/store';

const SwitchTheme = () => {
  const { themeName, setTheme } = useThemeStore();
  const [checked, setChecked] = useState(false);

  useMemo(() => {
    setChecked(themeName === 'dark' ? false : true);
  }, [themeName]);

  return (
    <Container>
      <IconDark checked={themeName === 'dark' ? true : false} />
      <Switch
        onChange={() => setTheme(themeName === 'dark' ? 'light' : 'dark')}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#5A6069'
        offColor='#5A6069'
        handleDiameter={12}
        height={24}
        width={48}
      />
      <IconLight checked={themeName !== 'dark' ? true : false} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export default SwitchTheme;
