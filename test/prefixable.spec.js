import expect from 'expect';
import prefixable from '../src/prefixable';

describe('#prefixable', () => {
  it('should say if a property should be prefixed', () => {
    expect(prefixable('transform')).toBe(true);
  });

  it('should say if a property should not be prefixed', () => {
    expect(prefixable('foo')).toBe(false);
  });
});
