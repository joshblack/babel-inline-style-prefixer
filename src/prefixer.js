export default function autoprefix(style) {
  if (style.hasOwnProperty('userSelect')) {
    Object.assign(style, {
      WebkitUserSelect: style.userSelect,
      MozUserSelect: style.userSelect,
      msUserSelect: style.userSelect
    });
  }

  if (style.hasOwnProperty('transition')) {
    Object.assign(style, {
      WebkitTransition: style.transition,
      MozTransition: style.transition,
      msTransition: style.transition
    });
  }

  if (style.hasOwnProperty('boxShadow')) {
    Object.assign(style, {
      WebkitBoxShadow: style.boxShadow,
      MozBoxShadow: style.boxShadow,
      msBoxSelect: style.boxShadow
    });
  }

  if (style.hasOwnProperty('fontSmoothing')) {
    Object.assign(style, {
      WebkitFontSmoothing: style.fontSmoothing,
      MozOsxFontSmoothing: style.fontSmoothing === 'antialiased' ? 'grayscale' : undefined
    });
  }

  if (style.hasOwnProperty('flexDirection')) {
    Object.assign(style, {
      WebkitBoxOrient: style.flexDirection === 'column' ? 'vertical' : 'horizontal',
      WebkitBoxDirection: 'normal',
      WebkitFlexDirection: style.flexDirection,
      mxFlexDirection: style.flexDirection
    });
  }

  if (style.hasOwnProperty('flexWrap')) {
    Object.assign(style, {
      WebkitFlexWrap: style.flexWrap
    });
  }

  if (style.hasOwnProperty('alignItems')) {
    Object.assign(style, {
      WebkitBoxAlign: style.alignItems,
      WebkitAlignItems: style.alignItems,
      msFlexAlign: style.alignItems
    });
  }

  if (style.hasOwnProperty('flexGrow')) {
    Object.assign(style, {
      WebkitFlexGrow: style.flexGrow
    });
  }

  if (style.hasOwnProperty('flexShrink')) {
    Object.assign(style, {
      WebkitFlexShrink: style.flexShrink
    });
  }

  if (style.hasOwnProperty('order')) {
    Object.assign(style, {
      WebkitOrder: style.order
    });
  }

  if (style.hasOwnProperty('justifyContent')) {
    Object.assign(style, {
      WebkitJustifyContent: style.justifyContent
    });
  }

  if (style.hasOwnProperty('transform')) {
    Object.assign(style, {
      WebkitTransform: style.transform,
      msTransform: style.transform
    });
  }

  if (style.display === 'flex') {
    style.display = style.display + ';display:-webkit-flex;display:-ms-flexbox';
  }

  return style;
}
