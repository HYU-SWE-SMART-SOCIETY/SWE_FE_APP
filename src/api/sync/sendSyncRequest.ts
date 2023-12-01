import {BE_SYNC_REQ, SyncRequest, SyncResponse} from './types';
import {sendPingRequest} from '../ping/sendPingRequest';
import {Ping, PingResponse} from '../ping/types';
import axios from 'axios';

export const sendSyncRequest = async (
  syncRequest: SyncRequest,
): Promise<SyncResponse | null> => {
  //TODO: Must define return type later.
  try {
    const userId: number = syncRequest.userId;
    const username: string = syncRequest.username;
    const setting: any = syncRequest.setting;

    const pingReq = {userId};
    const pingRes: PingResponse = await sendPingRequest(pingReq);
    const pingInstanceList: Ping[] | null = pingRes.result;

    if (pingInstanceList === null) {
      console.error('PING ERROR!!!!');
      return null;
    } else {
      const syncReq: BE_SYNC_REQ = {
        user: username,
        connectedDevices: pingInstanceList,
        payloads: setting,
      };

      const syncResp = await axios.post(
        'http://localhost:11000/api/v1/sync/request?type=sync_ai',
        syncReq,
      );

      if (!syncResp.data.ok) {
        console.error('Error!! Sync Response: ' + syncResp.data.message);
        return null;
      } else {
        const respData = syncResp.data;
        return respData.data;
      }
    }
  } catch (e: any) {
    console.error('Error while synchronize the setting data: ' + e.message);
    return null;
  }
};
