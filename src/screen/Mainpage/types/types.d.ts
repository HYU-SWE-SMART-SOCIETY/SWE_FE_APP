interface FetchRequest {
  userId: number;
  settingName: string;
}

interface Settings {
  data: {
    settingName: string;
    instanceSetting: string;
  };
}

export interface SettingResponse {
  ok: boolean;
  message: string | null;
  payload: Settings | null;
}

export interface ConnectedDevice {
  instanceId: number;
  isExist: boolean;
}

export interface SyncRequest {
  user: stirng;
  connectedDevices: ConnectedDevice[];
  payloads: any;
}
