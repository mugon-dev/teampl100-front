import React from 'react';
import { getSchoolFetch, SchoolProp, useGetSchool } from '$queries/useGetSchool';
import { GetServerSidePropsContext } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { QueryKeys } from '$constants/QueryKeys';
import { TableTD, TableTR } from '$components/school_table/style';

const Table = () => {
  const schoolProps: SchoolProp = {
    pageNo: 1,
    numOfRows: 30,
    type: 'json',
    edcSportNm: '경상남도창원교육지원청',
  };
  const { data: school } = useGetSchool(schoolProps);

  return (
    <>
      {school?.response.body.items.map((school, index) => {
        return (
          <TableTR key={index}>
            <TableTD>{school.enfsType}</TableTD>
            <TableTD>{school.schulNm}</TableTD>
            <TableTD>{school.edcSportNm}</TableTD>
          </TableTR>
        );
      })}
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const schoolProps: SchoolProp = {
    pageNo: 1,
    numOfRows: 30,
    type: 'json',
    edcSportNm: '경상남도창원교육지원청',
  };
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(QueryKeys.SCHOOL.INFO, () => getSchoolFetch(schoolProps));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Table;
