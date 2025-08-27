import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { byKey, isExtensionInfo, toNavLink } from '../../utils/index';

@Component({
  selector: 'app-extensions',
  templateUrl: './Extensions.component.html',
  styleUrls: ['./Extensions.component.css'],
  imports: [CommonModule, MatButtonModule],
})
export class ExtensionsComponent {
  @Input() extensions: Record<string, Extension> = {};
  @Output() linkClick = new EventEmitter<{
    event: MouseEvent;
    item: KeyedNavLink;
  }>();

  get links(): KeyedNavLink[] {
    return Object.values(this.extensions)
      .filter(isExtensionInfo)
      .map(toNavLink)
      .sort(byKey);
  }

  handleClick(event: MouseEvent, item: KeyedNavLink) {
    this.linkClick.emit({ event, item });
  }
}
