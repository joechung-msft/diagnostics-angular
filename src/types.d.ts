type Configuration = Record<string, string>;

interface Diagnostics {
  buildInfo: BuildInfoProps;
  extensions: Record<string, Extension>;
  serverInfo: ServerInfoProps;
}

interface ExtensionInfo {
  extensionName: string;
  config?: Record<string, string>;
  stageDefinition?: Record<string, string[]>;
}

interface ExtensionError {
  lastError: {
    errorMessage: string;
    time: string;
  };
}

type Extension = ExtensionInfo | ExtensionError;

// Remove Fluent UI 8 dependency and define KeyedNavLink locally
type KeyedNavLink = {
  key: string;
  name: string;
  url?: string;
  [prop: string]: unknown;
};

interface KeyValuePair<TValue> {
  key: string;
  value: TValue;
}

interface ServerInfo {
  deploymentId: string;
  extensionSync: {
    totalSyncAllCount: number;
  };
  hostname: string;
  nodeVersions: string;
  serverId: string;
  uptime: number;
}

type StageDefinition = Record<string, string[]>;
