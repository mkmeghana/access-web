import Header from "./components/Header";
import Banner from "./components/Banner";
import Benefits from "./components/Benefits";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="dark bg-black">
      <Header />
      <Banner />
      <Benefits />
      <div className="flex">
        <Card />
      </div>
    </main>
  )
}
