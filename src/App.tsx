import ReactDOM from 'react-dom'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppContainer from './components/template/app_container'
import Page404 from './pages/404'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />}>
            <Route path='saludo' element={<h1>Hola mundo </h1>} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
