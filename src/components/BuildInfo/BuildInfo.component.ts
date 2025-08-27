import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-build-info',
  templateUrl: './BuildInfo.component.html',
  imports: [CommonModule, MatTableModule],
})
export class BuildInfoComponent {
  @Input() buildVersion: string | undefined;

  get items(): { name: string; value: string }[] {
    if (this.buildVersion === undefined) {
      return [];
    }

    return [{ name: 'Build Version', value: this.buildVersion }];
  }
}
