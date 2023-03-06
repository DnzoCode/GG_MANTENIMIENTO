import Navbar from "./components/Navbar/page";
import Title from "./components/Title/Title";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="flex">
        <Navbar />
        <Title />
      </div>
    </div>
  )
}
