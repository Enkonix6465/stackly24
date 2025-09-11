import React from 'react';
import { NextPageContext } from 'next';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  statusCode?: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

function Error({ statusCode, hasGetInitialPropsRun, err }: ErrorProps) {
  const getErrorMessage = () => {
    if (statusCode === 404) {
      return 'The page you are looking for could not be found.';
    }
    if (statusCode === 500) {
      return 'An internal server error occurred. Please try again later.';
    }
    if (err?.message) {
      return err.message;
    }
    return 'An unexpected error occurred.';
  };

  const getErrorTitle = () => {
    if (statusCode === 404) {
      return 'Page Not Found';
    }
    if (statusCode === 500) {
      return 'Server Error';
    }
    return 'Something went wrong';
  };

  return (
    <>
      <Head>
        <title>{getErrorTitle()} - Stackly</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {getErrorTitle()}
            </CardTitle>
            {statusCode && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Error Code: {statusCode}
              </p>
            )}
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {getErrorMessage()}
            </p>
            
            <div className="flex flex-col space-y-2">
              <Button
                onClick={() => window.location.reload()}
                className="w-full"
                variant="default"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
              </Button>
              
              <Button
                onClick={() => window.location.href = '/'}
                className="w-full"
                variant="outline"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && err && (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-2 rounded overflow-auto">
                  {err.stack}
                </pre>
              </details>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, hasGetInitialPropsRun: true, err };
};

export default Error;
