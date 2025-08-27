import { ExtensionComponent } from './Extension.component';

describe('ExtensionComponent', () => {
  let component: ExtensionComponent;

  beforeEach(() => {
    component = new ExtensionComponent();
  });

  it('hasConfig returns false when config is undefined', () => {
    component.config = undefined;
    expect(component.hasConfig).toBeFalse();
  });

  it('hasConfig returns true when config is set', () => {
    component.config = { foo: 'bar' };
    expect(component.hasConfig).toBeTrue();
  });

  it('hasStageDefinition returns false when stageDefinition is undefined', () => {
    component.stageDefinition = undefined;
    expect(component.hasStageDefinition).toBeFalse();
  });

  it('hasStageDefinition returns true when stageDefinition is set', () => {
    component.stageDefinition = { stageA: ['step1'] };
    expect(component.hasStageDefinition).toBeTrue();
  });
});
