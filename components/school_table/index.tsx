import React from 'react';
import { BodyWrapper, TableHeader, TableTH, TableTitle } from '$components/school_table/style';
import AsyncBoundaryWithQuery from '$components/boundary/AsyncBoundaryWithQuery';
import Table from '$components/school_table/table';
import TableSkeleton from '$components/school_table/table_skeleton';

const SchoolTable = () => {
  return (
    <BodyWrapper>
      <TableTitle>경상남도 창원교육지원청 교육기관 목록</TableTitle>
      <TableHeader>
        <TableTH>구분</TableTH>
        <TableTH>학교명</TableTH>
        <TableTH>소속지원청</TableTH>
      </TableHeader>
      <AsyncBoundaryWithQuery pendingFallback={<TableSkeleton />}>
        <Table />
      </AsyncBoundaryWithQuery>
    </BodyWrapper>
  );
};

export default SchoolTable;
