import React from 'react';
import { SxProps, Theme } from '../types/theme';

// Resolve theme values from sx props
export const resolveSxValue = (value: any, theme: Theme): any => {
  if (typeof value === 'string' && value.startsWith('theme.')) {
    const path = value.replace('theme.', '');
    const keys = path.split('.');
    let result: any = theme;
    
    for (const key of keys) {
      result = result?.[key];
    }
    
    return result;
  }
  
  return value;
};

// Convert sx props to CSS properties
export const sxToCSS = (sx: SxProps, theme: Theme): React.CSSProperties => {
  const css: React.CSSProperties = {};
  
  Object.entries(sx).forEach(([key, value]) => {
    const resolvedValue = resolveSxValue(value, theme);
    
    switch (key) {
      // Colors
      case 'color':
        css.color = resolvedValue;
        break;
      case 'backgroundColor':
      case 'bg':
        css.backgroundColor = resolvedValue;
        break;
      case 'borderColor':
        css.borderColor = resolvedValue;
        break;
      
      // Typography
      case 'fontSize':
        css.fontSize = resolvedValue;
        break;
      case 'fontWeight':
        css.fontWeight = resolvedValue;
        break;
      case 'fontFamily':
        css.fontFamily = resolvedValue;
        break;
      case 'lineHeight':
        css.lineHeight = resolvedValue;
        break;
      case 'letterSpacing':
        css.letterSpacing = resolvedValue;
        break;
      case 'textAlign':
        css.textAlign = resolvedValue;
        break;
      
      // Spacing
      case 'padding':
        css.padding = resolvedValue;
        break;
      case 'paddingTop':
      case 'pt':
        css.paddingTop = resolvedValue;
        break;
      case 'paddingRight':
      case 'pr':
        css.paddingRight = resolvedValue;
        break;
      case 'paddingBottom':
      case 'pb':
        css.paddingBottom = resolvedValue;
        break;
      case 'paddingLeft':
      case 'pl':
        css.paddingLeft = resolvedValue;
        break;
      case 'paddingX':
      case 'px':
        css.paddingLeft = resolvedValue;
        css.paddingRight = resolvedValue;
        break;
      case 'paddingY':
      case 'py':
        css.paddingTop = resolvedValue;
        css.paddingBottom = resolvedValue;
        break;
      
      case 'margin':
        css.margin = resolvedValue;
        break;
      case 'marginTop':
      case 'mt':
        css.marginTop = resolvedValue;
        break;
      case 'marginRight':
      case 'mr':
        css.marginRight = resolvedValue;
        break;
      case 'marginBottom':
      case 'mb':
        css.marginBottom = resolvedValue;
        break;
      case 'marginLeft':
      case 'ml':
        css.marginLeft = resolvedValue;
        break;
      case 'marginX':
      case 'mx':
        css.marginLeft = resolvedValue;
        css.marginRight = resolvedValue;
        break;
      case 'marginY':
      case 'my':
        css.marginTop = resolvedValue;
        css.marginBottom = resolvedValue;
        break;
      
      // Layout
      case 'width':
        css.width = resolvedValue;
        break;
      case 'height':
        css.height = resolvedValue;
        break;
      case 'minWidth':
        css.minWidth = resolvedValue;
        break;
      case 'maxWidth':
        css.maxWidth = resolvedValue;
        break;
      case 'minHeight':
        css.minHeight = resolvedValue;
        break;
      case 'maxHeight':
        css.maxHeight = resolvedValue;
        break;
      
      // Flexbox
      case 'display':
        css.display = resolvedValue;
        break;
      case 'flexDirection':
        css.flexDirection = resolvedValue;
        break;
      case 'flexWrap':
        css.flexWrap = resolvedValue;
        break;
      case 'flex':
        css.flex = resolvedValue;
        break;
      case 'flexGrow':
        css.flexGrow = resolvedValue;
        break;
      case 'flexShrink':
        css.flexShrink = resolvedValue;
        break;
      case 'justifyContent':
        css.justifyContent = resolvedValue;
        break;
      case 'alignItems':
        css.alignItems = resolvedValue;
        break;
      case 'alignSelf':
        css.alignSelf = resolvedValue;
        break;
      
      // Position
      case 'position':
        css.position = resolvedValue;
        break;
      case 'top':
        css.top = resolvedValue;
        break;
      case 'right':
        css.right = resolvedValue;
        break;
      case 'bottom':
        css.bottom = resolvedValue;
        break;
      case 'left':
        css.left = resolvedValue;
        break;
      case 'zIndex':
        css.zIndex = resolvedValue;
        break;
      
      // Border
      case 'border':
        css.border = resolvedValue;
        break;
      case 'borderWidth':
        css.borderWidth = resolvedValue;
        break;
      case 'borderStyle':
        css.borderStyle = resolvedValue;
        break;
      case 'borderRadius':
        css.borderRadius = resolvedValue;
        break;
      
      // Shadow
      case 'boxShadow':
        css.boxShadow = resolvedValue;
        break;
      
      // Transform
      case 'transform':
        css.transform = resolvedValue;
        break;
      case 'transition':
        css.transition = resolvedValue;
        break;
      
      // Opacity
      case 'opacity':
        css.opacity = resolvedValue;
        break;
      
      // Cursor
      case 'cursor':
        css.cursor = resolvedValue;
        break;
      
      // Overflow
      case 'overflow':
        css.overflow = resolvedValue;
        break;
      case 'overflowX':
        css.overflowX = resolvedValue;
        break;
      case 'overflowY':
        css.overflowY = resolvedValue;
        break;
      
      // Default: pass through as CSS property
      default:
        (css as any)[key] = resolvedValue;
    }
  });
  
  return css;
};

// Merge sx props with existing styles
export const mergeSx = (baseStyle: React.CSSProperties, sx: SxProps, theme: Theme): React.CSSProperties => {
  const sxCSS = sxToCSS(sx, theme);
  return { ...baseStyle, ...sxCSS };
}; 