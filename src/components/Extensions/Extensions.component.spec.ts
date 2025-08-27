import { ExtensionsComponent } from './Extensions.component';

describe('ExtensionsComponent', () => {
  let component: ExtensionsComponent;

  beforeEach(() => {
    component = new ExtensionsComponent();
  });

  it('links returns empty array for empty extensions', () => {
    component.extensions = {};
    expect(component.links).toEqual([]);
  });

  it('links returns KeyedNavLink array for ExtensionInfo only', () => {
    component.extensions = {
      ext1: { extensionName: 'A' },
      ext2: { extensionName: 'B' },
    };
    expect(component.links).toEqual([
      { key: 'A', name: 'A', url: '' },
      { key: 'B', name: 'B', url: '' },
    ]);
  });

  it('links filters out ExtensionError', () => {
    component.extensions = {
      ext1: { extensionName: 'A' },
      ext2: { lastError: { errorMessage: 'err', time: 'now' } },
    };
    expect(component.links).toEqual([{ key: 'A', name: 'A', url: '' }]);
  });

  it('handleClick emits linkClick with correct payload', () => {
    spyOn(component.linkClick, 'emit');
    const event = new MouseEvent('click');
    const item = { key: 'A', name: 'A', url: '' };
    component.handleClick(event, item);
    expect(component.linkClick.emit).toHaveBeenCalledWith({ event, item });
  });
});
