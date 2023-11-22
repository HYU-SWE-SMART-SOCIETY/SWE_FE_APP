import {Ping} from '../ping/types';

export interface SyncRequest {
  userId: number;
  username: string;
  setting: any;
}

export interface BE_SYNC_REQ {
  user: string;
  connectedDevices: Ping[];
  payloads: any;
}

interface Substitution {
  instId: number;
  substituteType: string;
  isUpgrade: boolean;
}

interface SyncRes {
  ok: number;
}
export interface SyncResponse {
  ok: boolean;
  res: {
    result: SyncRes[];
  };
  substituteList: Substitution[];
  message: string;
}
