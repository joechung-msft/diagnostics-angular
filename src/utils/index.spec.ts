import { byKey, isExtensionInfo, toNavLink } from './index';

describe('isExtensionInfo', () => {
  it('returns true for ExtensionInfo', () => {
    const ext: ExtensionInfo = { extensionName: 'ext' };
    expect(isExtensionInfo(ext)).toBeTrue();
  });

  it('returns false for ExtensionError', () => {
    const ext: ExtensionError = {
      lastError: { errorMessage: 'err', time: 'now' },
    };
    expect(isExtensionInfo(ext as Extension)).toBeFalse();
  });

  it('returns false for undefined', () => {
    expect(isExtensionInfo(undefined)).toBeFalse();
  });
});

describe('byKey', () => {
  it('sorts by key ascending', () => {
    const a: KeyedNavLink = { key: 'a', name: 'A' };
    const b: KeyedNavLink = { key: 'b', name: 'B' };
    expect(byKey(a, b)).toBeLessThan(0);
    expect(byKey(b, a)).toBeGreaterThan(0);
    expect(byKey(a, a)).toBe(0);
  });
});

describe('toNavLink', () => {
  it('creates KeyedNavLink from ExtensionInfo', () => {
    const ext: ExtensionInfo = { extensionName: 'foo' };
    const nav = toNavLink(ext);
    expect(nav).toEqual({ key: 'foo', name: 'foo', url: '' });
  });
});
