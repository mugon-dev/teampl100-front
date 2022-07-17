import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { School } from '$types/school';
import { API_URL_BASE, OPEN_API_KEY } from '$config';
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';
import { QueryKeys } from '$constants/QueryKeys';

export interface SchoolProp {
  pageNo: number;
  numOfRows: number;
  type: string;
  edcSportNm: string;
}

export const getSchoolFetch = async (props: SchoolProp) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return await withAxios<BaseResponse<School>>({
    url: `${API_URL_BASE}?serviceKey=${OPEN_API_KEY}&pageNo=${props.pageNo}&numOfRows=${props.numOfRows}&type=${props.type}&edcSportNm=${props.edcSportNm}`,
  });
};
export const useGetSchool = (
  props: SchoolProp,
  options?: UseQueryOptions<BaseResponse<School>, AxiosError, BaseResponse<School>, string[]>,
): UseQueryResult<BaseResponse<School>, AxiosError> =>
  useQuery(QueryKeys.SCHOOL.INFO, () => getSchoolFetch(props), { ...options });
