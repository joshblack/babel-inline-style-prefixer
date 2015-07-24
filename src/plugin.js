import prefix from './prefixer';

export default function({ Plugin, types: t }) {
  return new Plugin('inline-style-prefixer', {
    visitor: {
      Property(node) {
        const { key, value } = node;
        const style = { [key.name]: value.value };
        const prefixed = prefix(style);

        return Object.keys(prefixed).map((s) =>
          t.labeledStatement(
            t.literal(s),
            t.literal(prefixed[s])
          ));
      }
    }
  });
}
