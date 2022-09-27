import Header from "../components/header"
import Menu from "../components/menu"

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:hidden">
        <Menu />
      </div>
    </>
  )
}
