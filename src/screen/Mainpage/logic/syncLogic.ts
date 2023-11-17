import {sendPingRequest} from '../api/sendPingRequest';

export const syncLogic = async (userId: number, settingString: string) => {
  try {
    const connectedDevices = await sendPingRequest(userId);
    // TODO if (connectedDevices == null)
    const parsedInstanceSetting = JSON.parse(settingString);
    //TODO Sync Request
  } catch (e: any) {
    console.log(e.message);
  }
};
