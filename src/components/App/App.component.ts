import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { isExtensionInfo } from '../../utils/index';
import { BuildInfoComponent } from '../BuildInfo/BuildInfo.component';
import { ExtensionComponent } from '../Extension/Extension.component';
import { ExtensionsComponent } from '../Extensions/Extensions.component';
import { ServerInfoComponent } from '../ServerInfo/ServerInfo.component';

export enum Environment {
  Public = 'https://hosting.portal.azure.net/api/diagnostics',
  Fairfax = 'https://hosting.azureportal.usgovcloudapi.net/api/diagnostics',
  Mooncake = 'https://hosting.azureportal.chinacloudapi.cn/api/diagnostics',
}

@Component({
  selector: 'app-component',
  templateUrl: './App.component.html',
  styleUrls: ['./App.component.css'],
  imports: [
    CommonModule,
    BuildInfoComponent,
    ExtensionComponent,
    ExtensionsComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    ServerInfoComponent,
  ],
})
export class AppComponent implements OnInit {
  diagnostics?: Diagnostics;
  extension?: ExtensionInfo;
  environment: Environment = Environment.Public;
  selectedIndex = 0;

  get environmentName(): string {
    switch (this.environment) {
      case Environment.Public:
        return 'Public Cloud';
      case Environment.Fairfax:
        return 'Fairfax';
      case Environment.Mooncake:
        return 'Mooncake';
    }
  }

  environments = [
    {
      key: 'public',
      text: 'Public Cloud',
      selected: () => this.environment === Environment.Public,
      onClick: () => {
        console.log('Switching to Public Cloud');
        this.setEnvironment(Environment.Public);
      },
    },
    {
      key: 'fairfax',
      text: 'Fairfax',
      selected: () => this.environment === Environment.Fairfax,
      onClick: () => {
        console.log('Switching to Fairfax');
        this.setEnvironment(Environment.Fairfax);
      },
    },
    {
      key: 'mooncake',
      text: 'Mooncake',
      selected: () => this.environment === Environment.Mooncake,
      onClick: () => {
        console.log('Switching to Mooncake');
        this.setEnvironment(Environment.Mooncake);
      },
    },
  ];

  get showPaasServerless(): boolean {
    return isExtensionInfo(this.diagnostics?.extensions?.['paasserverless']);
  }

  async ngOnInit() {
    await this.fetchDiagnostics();
  }

  async fetchDiagnostics() {
    const response = await fetch(this.environment);
    this.diagnostics = await response.json();
  }

  async setEnvironment(env: Environment) {
    this.environment = env;
    this.extension = undefined;
    await this.fetchDiagnostics();
  }

  handleLinkClick(item?: KeyedNavLink) {
    if (item) {
      const extension = this.diagnostics?.extensions[item.key];
      if (isExtensionInfo(extension)) {
        this.extension = extension;
      }
    }
  }

  selectExtension(key: string) {
    const ext = this.diagnostics?.extensions[key];
    if (isExtensionInfo(ext)) {
      this.extension = ext;
    }
  }
}
