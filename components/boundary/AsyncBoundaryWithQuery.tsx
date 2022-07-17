import { useQueryErrorResetBoundary } from 'react-query';

import { ReactElement, ReactNode } from 'react';
import ErrorFallback from '$components/boundary/ErrorFallback';
import { ErrorBoundaryProps } from '$components/boundary/ErrorBuondary';
import AsyncBoundary from '$components/boundary/AsyncBoundary';

type QueryBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactElement | null;
  rejectedFallback?: ErrorBoundaryProps['renderFallback'];
};

function AsyncBoundaryWithQuery({
  children,
  pendingFallback = <div>로딩</div>,
  rejectedFallback = ({ error, reset }) => <ErrorFallback error={error} reset={reset} />,
}: QueryBoundaryProps) {
  // 해당 쿼리 재실행
  const { reset } = useQueryErrorResetBoundary();

  return (
    <AsyncBoundary reset={reset} pendingFallback={pendingFallback} rejectedFallback={rejectedFallback}>
      {children}
    </AsyncBoundary>
  );
}

export default AsyncBoundaryWithQuery;
