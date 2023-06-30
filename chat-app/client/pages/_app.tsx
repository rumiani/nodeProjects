import { GoogleOAuthProvider } from '@react-oauth/google';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}