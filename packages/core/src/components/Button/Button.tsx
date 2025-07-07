import React from 'react';
import { useTheme } from '../../theme/ThemeProvider';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'contained' | 'outlined' | 'text' | 'ghost' | 'gradient';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  sx?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  onClick,
  className,
  style,
  sx,
  ...props
}) => {
  const { theme } = useTheme();

  // Helper functions
  const getColor = (colorName: string, shade: string = '500') => {
    const colorPalette = theme.colors[colorName as keyof typeof theme.colors];
    if (colorPalette && typeof colorPalette === 'object' && shade in colorPalette) {
      return (colorPalette as any)[shade];
    }
    return theme.colors.primary[500];
  };

  const getSpacing = (size: string) => {
    return theme.spacing[size as keyof typeof theme.spacing] || theme.spacing.md;
  };

  const getRadius = (size: string) => {
    return theme.radius[size as keyof typeof theme.radius] || theme.radius.md;
  };

  const getFontSize = (size: string) => {
    return theme.typography.fontSize[size as keyof typeof theme.typography.fontSize] || theme.typography.fontSize.base;
  };

  const getFontWeight = (weight: string) => {
    return theme.typography.fontWeight[weight as keyof typeof theme.typography.fontWeight] || theme.typography.fontWeight.medium;
  };

  const getShadow = (size: string) => {
    return theme.shadows[size as keyof typeof theme.shadows] || theme.shadows.none;
  };

  const getTransition = () => {
    return typeof theme.transitions.normal === 'string' ? theme.transitions.normal : '250ms ease';
  };

  // Base styles
  const baseStyles: React.CSSProperties = {
    fontFamily: theme.typography.fontFamily.primary,
    fontSize: getFontSize(size),
    fontWeight: getFontWeight('medium'),
    borderRadius: getRadius(size),
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: getSpacing('xs'),
    transition: getTransition(),
    textDecoration: 'none',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    minWidth: fullWidth ? '100%' : undefined,
    width: fullWidth ? '100%' : undefined,
    ...style,
  };

  // Size styles
  const sizeStyles: React.CSSProperties = {
    padding:
      size === 'xs'
        ? `${getSpacing('xs')} ${getSpacing('sm')}`
        : size === 'sm'
        ? `${getSpacing('sm')} ${getSpacing('md')}`
        : size === 'lg'
        ? `${getSpacing('md')} ${getSpacing('lg')}`
        : size === 'xl'
        ? `${getSpacing('lg')} ${getSpacing('2xl')}`
        : `${getSpacing('sm')} ${getSpacing('lg')}`,
    minHeight:
      size === 'xs'
        ? '24px'
        : size === 'sm'
        ? '32px'
        : size === 'lg'
        ? '48px'
        : size === 'xl'
        ? '56px'
        : '40px',
  };

  // Variant styles
  const getVariantStyles = (): React.CSSProperties => {
    const colorValue = getColor(color);
    const colorLight = getColor(color, '100');
    const colorDark = getColor(color, '700');
    const textColor = theme.colors.text.inverse;
    const borderColor = colorValue;

    switch (variant) {
      case 'contained':
        return {
          background: colorValue,
          color: textColor,
          boxShadow: getShadow('sm'),
        };
      case 'outlined':
        return {
          background: 'transparent',
          color: colorValue,
          border: `1px solid ${borderColor}`,
        };
      case 'text':
        return {
          background: 'transparent',
          color: colorValue,
          paddingLeft: getSpacing('sm'),
          paddingRight: getSpacing('sm'),
        };
      case 'ghost':
        return {
          background: 'transparent',
          color: theme.colors.neutral[700],
        };
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${getColor(color, '500')} 0%, ${getColor('secondary', '500')} 100%)`,
          color: textColor,
          boxShadow: getShadow('md'),
        };
      default:
        return {};
    }
  };

  // Disabled styles
  const disabledStyles: React.CSSProperties = disabled
    ? {
        opacity: 0.6,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }
    : {};

  // Loading styles
  const loadingStyles: React.CSSProperties = loading
    ? {
        pointerEvents: 'none',
      }
    : {};

  // Merge all styles
  const buttonStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles,
    ...getVariantStyles(),
    ...disabledStyles,
    ...loadingStyles,
    ...sx, // Allow sx prop to override
  };

  // Handle hover states with state
  const [isHovered, setIsHovered] = React.useState(false);

  const getHoverStyles = (): React.CSSProperties => {
    if (disabled || loading || !isHovered) return {};

    const colorValue = getColor(color);
    const colorLight = getColor(color, '100');
    const colorDark = getColor(color, '700');

    switch (variant) {
      case 'contained':
        return {
          background: colorDark,
          boxShadow: getShadow('md'),
        };
      case 'outlined':
        return {
          background: colorLight,
          borderColor: colorDark,
          color: colorDark,
        };
      case 'text':
        return {
          background: colorLight,
          color: colorDark,
        };
      case 'ghost':
        return {
          background: theme.colors.neutral[100],
          color: theme.colors.neutral[900],
        };
      case 'gradient':
        return {
          background: `linear-gradient(135deg, ${getColor(color, '600')} 0%, ${getColor('secondary', '600')} 100%)`,
          boxShadow: getShadow('lg'),
        };
      default:
        return {};
    }
  };

  const finalStyles: React.CSSProperties = {
    ...buttonStyles,
    ...getHoverStyles(),
  };

  return (
    <button
      className={clsx('modern-ui-button', className)}
      style={finalStyles}
      disabled={disabled || loading}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {loading && (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: `2px solid transparent`,
            borderTop: `2px solid currentColor`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginRight: getSpacing('xs'),
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </button>
  );
};

export default Button; 