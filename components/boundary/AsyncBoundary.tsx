import { ReactElement, ReactNode } from 'react';
import SSRSafeSuspense from '$components/suspense/SSRSafeSuspense';
import ErrorBoundary, { ErrorBoundaryProps } from '$components/boundary/ErrorBuondary';

export type AsyncBoundaryProps = {
  children: ReactNode;
  pendingFallback: ReactElement | null;
  rejectedFallback: ErrorBoundaryProps['renderFallback'];
} & Omit<ErrorBoundaryProps, 'renderFallback'>;

function AsyncBoundary({ pendingFallback, rejectedFallback, children, ...errorBoundaryProps }: AsyncBoundaryProps) {
  return (
    <>
      <ErrorBoundary renderFallback={rejectedFallback} {...errorBoundaryProps}>
        <SSRSafeSuspense fallback={pendingFallback}>{children}</SSRSafeSuspense>
      </ErrorBoundary>
    </>
  );
}

export default AsyncBoundary;
