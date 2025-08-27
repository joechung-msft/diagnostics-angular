import { StageDefinitionComponent } from './StageDefinition.component';

describe('StageDefinitionComponent', () => {
  let component: StageDefinitionComponent;

  beforeEach(() => {
    component = new StageDefinitionComponent();
  });

  it('items returns empty array when stageDefinition is undefined', () => {
    component.stageDefinition = undefined;
    expect(component.items).toEqual([]);
  });

  it('items returns correct array for valid StageDefinition', () => {
    component.stageDefinition = {
      stageA: ['step1', 'step2'],
      stageB: ['step3'],
    };
    expect(component.items).toEqual([
      { key: 'stageA', value: ['step1', 'step2'] },
      { key: 'stageB', value: ['step3'] },
    ]);
  });

  it('items returns empty array for empty StageDefinition', () => {
    component.stageDefinition = {};
    expect(component.items).toEqual([]);
  });
});
