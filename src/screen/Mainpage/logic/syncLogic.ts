import {sendPingRequest} from '../api/sendPingRequest';

export const syncLogic = async (
  userId: number,
  userName: string,
  settingString: string,
) => {
  try {
    const connectedDevices = await sendPingRequest(userId);
    // TODO if (connectedDevices == null)
    const parsedInstanceSetting = JSON.parse(settingString);
    //TODO Sync Request
    console.log(userName);
  } catch (e: any) {
    console.log(e.message);
  }
};
