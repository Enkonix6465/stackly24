import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Custom500() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Server Error - Stackly</title>
        <meta name="description" content="An internal server error occurred." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              500 - Server Error
            </CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              An internal server error occurred.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              We're experiencing some technical difficulties. Please try again in a few moments.
            </p>
            
            <div className="flex flex-col space-y-2">
              <Button
                onClick={() => window.location.reload()}
                className="w-full"
                variant="default"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
              
              <Button
                onClick={() => router.push('/')}
                className="w-full"
                variant="outline"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
