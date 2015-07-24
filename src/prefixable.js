const properties = new Set([
  'userSelect',
  'transition',
  'boxShadow',
  'fontSmoothing',
  'flexDirection',
  'flexWrap',
  'alignItems',
  'flexGrow',
  'flexShrink',
  'order',
  'justifyContent',
  'transform',
  'flex'
]);

export default function prefixable(property) {
  return properties.has(property);
}
