import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-stage-definition',
  templateUrl: './StageDefinition.component.html',
  imports: [CommonModule, MatTableModule],
})
export class StageDefinitionComponent {
  @Input() stageDefinition: StageDefinition | undefined;

  get items(): { key: string; value: string[] }[] {
    if (!this.stageDefinition) {
      return [];
    }

    return Object.entries(this.stageDefinition).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
