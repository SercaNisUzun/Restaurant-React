import { createRoot } from 'react-dom/client'
import '../src/scss/Main.scss'
import App from './App.jsx'
import { store } from "./Redux/Store.jsx"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <BrowserRouter basename='/Restaurant-React/'>
      <App />
    </BrowserRouter>

  </Provider>
  ,
)
