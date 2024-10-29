import Footer from "./components/Footer/Footer"
import MainContent from "./components/MainContent/MainContent"
import NavBar from "./components/NavBar/NavBar"


function App() {


  return (
    <>
     <NavBar></NavBar>

      <section className="container mx-auto p-5">
        <MainContent></MainContent>
      </section>
     <Footer></Footer>
    </>
  )
}

export default App
