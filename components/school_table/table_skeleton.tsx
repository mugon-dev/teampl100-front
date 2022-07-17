import React from 'react';
import { TableTD, TableTR } from '$components/school_table/style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TableSkeleton = () => {
  return (
    <>
      {[...Array(10)].map((x, i) => (
        <TableTR key={i}>
          <TableTD>
            <Skeleton width={70} />
          </TableTD>
          <TableTD>
            <Skeleton width={200} />
          </TableTD>
          <TableTD>
            <Skeleton width={260} />
          </TableTD>
        </TableTR>
      ))}
    </>
  );
};

export default TableSkeleton;
