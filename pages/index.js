import Header from "../components/header"
import Menu from "../components/menu"
import Hero from "./hero"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="lg:hidden">
        <Menu />
      </div>
    </>
  )
}
