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
