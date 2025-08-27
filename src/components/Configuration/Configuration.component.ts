import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-configuration',
  templateUrl: './Configuration.component.html',
  imports: [CommonModule, MatTableModule],
})
export class ConfigurationComponent {
  @Input() config: Configuration | undefined;

  get items(): KeyValuePair<string>[] {
    if (!this.config) {
      return [];
    }

    return Object.entries(this.config).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
