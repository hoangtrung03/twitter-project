import { globalString } from "../constants/constants"

export async function generateMetadata() {
  return {
    icons: {
      icon: '/favicon.ico'
    },
    title: `Sign up for Twiter ${globalString.SITE_NAME}`,
    description:
      'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
