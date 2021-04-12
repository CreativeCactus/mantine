import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  MantineSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
} from '@mantine/theme';

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 32,
};

interface CheckboxStylesProps {
  theme: MantineTheme;
  size: MantineSize;
  color: string;
}

export default createUseStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  checkboxWrapper: ({ size }: CheckboxStylesProps) => ({
    position: 'relative',
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
  }),

  label: ({ theme, size }: CheckboxStylesProps) => ({
    ...getFontStyles(theme),
    marginLeft: theme.spacing.sm,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: `${getSizeValue({ size, sizes })}px`,
  }),

  checkbox: ({ size, theme, color }: CheckboxStylesProps) => ({
    ...getFocusStyles(theme),
    appearance: 'none',
    backgroundColor: theme.colors.gray[0],
    border: `1px solid ${theme.colors.gray[4]}`,
    width: getSizeValue({ size, sizes }),
    height: getSizeValue({ size, sizes }),
    borderRadius: theme.radius.sm,
    padding: 0,
    outline: 0,
    cursor: 'pointer',
    display: 'block',
    margin: 0,

    '&:checked': {
      backgroundColor: getThemeColor({ theme, color, shade: 5 }),
      borderColor: getThemeColor({ theme, color, shade: 5 }),
      color: theme.white,

      '& + $icon': {
        color: theme.white,
        display: 'block',
      },
    },

    '&:disabled': {
      backgroundColor: theme.colors.gray[2],
      borderColor: theme.colors.gray[2],
      cursor: 'not-allowed',

      '& + $icon': {
        color: theme.colors.gray[5],
        filter: 'none',
      },
    },
  }),

  icon: {
    display: 'none',
    pointerEvents: 'none',
    width: '80%',
    height: '80%',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
  },
});