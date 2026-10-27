// App.jsx
import Header from './components/Header'
import Footer from './components/Footer'
import SistemaRotas from './components/SistemaRotas'




function App() {
  return (
    <div className="flex-1 flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col">
        <SistemaRotas />
      </div>

      <Footer />
    </div>
  )
}

export default App