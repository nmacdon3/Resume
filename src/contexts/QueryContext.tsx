import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: Infinity } } });

export const QueryContext = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="print:hidden">
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
      {children}
    </QueryClientProvider>
  );
};
