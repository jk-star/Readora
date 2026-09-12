import Header from './components/Header/Header'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Readora
          </h1>

          <p className="mt-4 text-gray-600">
            Your Digital Book Reader
          </p>
        </div>
      </main>
    </div>

  )
}

export default App
