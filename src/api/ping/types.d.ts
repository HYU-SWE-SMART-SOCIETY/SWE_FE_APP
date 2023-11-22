export interface PingRequest {
  userId: number;
}

interface Ping {
  isExist: boolean;
  instanceId: number;
}

export interface PingResponse {
  result: Ping[] | null;
}
