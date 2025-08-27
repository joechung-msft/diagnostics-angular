import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConfigurationComponent } from '../Configuration/Configuration.component';
import { StageDefinitionComponent } from '../StageDefinition/StageDefinition.component';

@Component({
  selector: 'app-extension',
  templateUrl: './Extension.component.html',
  styleUrls: ['./Extension.component.css'],
  imports: [CommonModule, ConfigurationComponent, StageDefinitionComponent],
})
export class ExtensionComponent {
  @Input() config?: Record<string, string>;
  @Input() extensionName = '';
  @Input() stageDefinition?: Record<string, string[]>;

  get hasConfig(): boolean {
    return !!this.config;
  }

  get hasStageDefinition(): boolean {
    return !!this.stageDefinition;
  }
}
