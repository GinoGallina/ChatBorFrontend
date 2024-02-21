import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/index.js'
import { UserLogo } from './components/User/UserLogo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        {window.location.href.includes('tipos') && <UserLogo></UserLogo>}
    </Provider>,
)
