import { GoogleOAuthProvider } from '@react-oauth/google';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
          <Provider store={store}>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID} >
              <Component {...pageProps} />
            </GoogleOAuthProvider>
          </Provider>
        )
}