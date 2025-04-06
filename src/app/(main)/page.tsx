import style from "@/app/(main)/home.module.css"
import CategoryProvider from "./_component/CategoryProvider"
import Header from "./_component/Header"
import CommonLayout from "./_component/CommonLayout"
import { Suspense } from "react"
import CategoryDeciderSuspense from "./_component/CategoryDeciderSuspense"
import Loading from "./_component/LoadingSpinner"

export default async function Home() {

  return (
    <div className={style.main}>
      <CategoryProvider>
        <Header/>
        <Suspense fallback={<Loading/>}>
          <CategoryDeciderSuspense/>
        </Suspense>
        <CommonLayout/>
      </CategoryProvider>
    </div>
  )
}