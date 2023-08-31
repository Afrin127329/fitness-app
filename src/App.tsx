import { useState } from "react";
import Footer from "./scenes/footer";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  return <div className="app bg-gray-20">
    <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Footer/>
  </div>;
}

export default App;
