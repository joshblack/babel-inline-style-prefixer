import expect from 'expect';
import prefixable from '../src/prefixable';

describe('#prefixable', () => {
  it('should say if a property should be prefixed', () => {
    expect(prefixable('flex')).toBe(true);
  });
});
