import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-server-info',
  templateUrl: './ServerInfo.component.html',
  imports: [CommonModule, MatTableModule],
})
export class ServerInfoComponent {
  @Input() serverInfo: ServerInfo | undefined;

  get items(): { key: string; value: string | number }[] {
    if (!this.serverInfo) {
      return [];
    }

    return [
      { key: 'Hostname', value: this.serverInfo.hostname },
      { key: 'Uptime', value: this.serverInfo.uptime },
      { key: 'Server ID', value: this.serverInfo.serverId },
      { key: 'Deployment ID', value: this.serverInfo.deploymentId },
      { key: 'Node Versions', value: this.serverInfo.nodeVersions },
      {
        key: 'Extension Sync | Total Sync All Count',
        value: this.serverInfo.extensionSync?.totalSyncAllCount,
      },
    ];
  }
}
