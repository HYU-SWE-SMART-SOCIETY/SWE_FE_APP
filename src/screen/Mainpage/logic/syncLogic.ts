import {sendPingRequest} from '../api/sendPingRequest';
import React from 'react';

export const syncLogic = async (
  userId: number,
  settingString: string,
  setData: React.Dispatch<any>,
  setNavFlag: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const connectedDevices = await sendPingRequest(userId);
    // TODO if (connectedDevices == null)
    const parsedInstanceSetting = JSON.parse(settingString);
    setData(parsedInstanceSetting);
    setNavFlag(true);
    //TODO Sync Request
  } catch (e: any) {
    console.log(e.message);
  }
};
