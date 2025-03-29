import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StudentHub - College Resources & Community",
  description: "Resources, community and more",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col min-h-screen justify-evenly"}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}


