import expect from 'expect';
import prefixable from '../src/prefixable';

describe('#prefixable', () => {
  it('should say if a property should be prefixed', () => {
    expect(prefixable('flex')).toBe(true);
  });

  it('should say if a property shout not be prefixed', () => {
    expect(prefixable('foo')).toBe(false);
  });
});
