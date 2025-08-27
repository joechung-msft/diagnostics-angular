import { ConfigurationComponent } from './Configuration.component';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;

  beforeEach(() => {
    component = new ConfigurationComponent();
  });

  it('items returns empty array when config is undefined', () => {
    component.config = undefined;
    expect(component.items).toEqual([]);
  });

  it('items returns correct array for valid config', () => {
    component.config = { foo: 'bar', baz: 'qux' };
    expect(component.items).toEqual([
      { key: 'foo', value: 'bar' },
      { key: 'baz', value: 'qux' },
    ]);
  });

  it('items returns empty array for empty config', () => {
    component.config = {};
    expect(component.items).toEqual([]);
  });
});
