import { Provider } from 'react-redux'
import './App.css'
import { ChatComponent } from './components/Chat/ChatComponent.jsx'
import { store } from './redux/store.js'

function App() {
    return (
        <>
            <Provider store={store}>
                <ChatComponent></ChatComponent>
            </Provider>
        </>
    )
}

export default App
