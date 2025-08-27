import { ServerInfoComponent } from './ServerInfo.component';

describe('ServerInfoComponent', () => {
  let component: ServerInfoComponent;

  beforeEach(() => {
    component = new ServerInfoComponent();
  });

  it('items returns empty array when serverInfo is undefined', () => {
    component.serverInfo = undefined;
    expect(component.items).toEqual([]);
  });

  it('items returns correct array for valid serverInfo', () => {
    component.serverInfo = {
      hostname: 'host1',
      uptime: 12345,
      serverId: 'srv-001',
      deploymentId: 'dep-001',
      nodeVersions: 'v18.0.0',
      extensionSync: { totalSyncAllCount: 42 },
    };
    expect(component.items).toEqual([
      { key: 'Hostname', value: 'host1' },
      { key: 'Uptime', value: 12345 },
      { key: 'Server ID', value: 'srv-001' },
      { key: 'Deployment ID', value: 'dep-001' },
      { key: 'Node Versions', value: 'v18.0.0' },
      { key: 'Extension Sync | Total Sync All Count', value: 42 },
    ]);
  });
});
