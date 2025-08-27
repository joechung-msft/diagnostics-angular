import { BuildInfoComponent } from './BuildInfo.component';

describe('BuildInfoComponent', () => {
  let component: BuildInfoComponent;

  beforeEach(() => {
    component = new BuildInfoComponent();
  });

  it('items returns empty array when buildVersion is undefined', () => {
    component.buildVersion = undefined;
    expect(component.items).toEqual([]);
  });

  it('items returns correct array when buildVersion is set', () => {
    component.buildVersion = '1.2.3';
    expect(component.items).toEqual([
      { name: 'Build Version', value: '1.2.3' },
    ]);
  });
});
