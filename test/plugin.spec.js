import expect from 'expect';
import { transform } from 'babel';
import plugin from '../src/plugin';

function compareToSource(styles) {
  return `'use strict';

var foo = ${styles};`;
}

describe('plugin', () => {
  it('should correctly prefix supported style keys', () => {
    const code = 'const foo = { transform: \'scale(1)\' };';
    const compiled = transform(code, { plugins: [plugin] });

    expect(compiled.code).toBe(compareToSource(
      `{ 'transform': 'scale(1)', 'WebkitTransform': 'scale(1)', 'msTransform': 'scale(1)' }`
    ));
  });

  it('should correctly prefix supported style values', () => {
    const code = 'const foo = { display: \'flex\' };';
    const compiled = transform(code, { plugins: [plugin] });

    expect(compiled.code).toBe(compareToSource(
      `{ 'display': 'flex;display:-webkit-flex;display:-ms-flexbox' }`
    ));
  });

  it('should not prefix non-css properties', () => {
    const code = 'const foo = { foo: \'bar\' };';
    const compiled = transform(code, { plugins: [plugin] });

    expect(compiled.code).toBe(compareToSource(
      `{ 'foo': \'bar\' }`
    ));
  });
});
