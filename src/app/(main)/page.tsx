import style from "@/app/(main)/home.module.css"
import CategoryProvider from "./_component/CategoryProvider"
import Header from "./_component/Header"

export default async function Home() {

  return (
    <div className={style.main}>
      <CategoryProvider>
        <Header/>

      </CategoryProvider>
    </div>
  )
}