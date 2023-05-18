import React, { useState } from 'react';
import styled from 'styled-components';
import IconLight from '../svgs/IconLight';
import IconDark from '../svgs/IconDark';
import Switch from 'react-switch';
import { useThemeStore } from '../app/store';

const SwitchTheme = () => {
  const { toggleTheme } = useThemeStore();
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    if (nextChecked) {
      setTheme('light');
      toggleTheme();
    }

    if (!nextChecked) {
      setTheme('dark');
      toggleTheme();
    }
  };

  return (
    <Container>
      <IconDark checked={theme === 'dark' ? true : false} />
      <Switch
        onChange={handleChange}
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor='#5A6069'
        offColor='#5A6069'
        handleDiameter={12}
        height={24}
        width={48}
      />
      <IconLight checked={theme === 'light' ? true : false} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export default SwitchTheme;
