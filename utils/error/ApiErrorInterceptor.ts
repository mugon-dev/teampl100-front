import { AxiosResponse } from 'axios';
import { BaseResponse } from '$types/BaseResponse';
import { ErrorCode, ErrorResponse } from '$constants/ErrorCode';
import { CommonApiError } from '$utils/error/ApiError';

export function ClientApiErrorInterceptor<T>(res: AxiosResponse<BaseResponse<T>>) {
  const code = res.data.response.header.resultCode;
  if (Object.prototype.hasOwnProperty.call(ErrorResponse, code)) {
    throw new CommonApiError(code as ErrorCode);
  } else {
    return res.data;
  }
}
