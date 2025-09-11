import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Home, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Page Not Found - Stackly</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              404 - Page Not Found
            </CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              The page you are looking for could not be found.
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="flex flex-col space-y-2">
              <Button
                onClick={() => router.back()}
                className="w-full"
                variant="default"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
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
