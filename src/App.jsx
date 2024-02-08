import './App.css'
import { ChatComponent } from './components/Chat/ChatComponent.jsx'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

import { TipoView } from './components/Tipo/TipoView.jsx'
import { AdminRoute } from './containers/Admin/AdminRoute.jsx'
import { ErrorView } from './components/Vistas/ErrorView.jsx'
import { CreateTipoComponent } from './components/Tipo/CreateTipoComponent.jsx'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/chat'
                        element={<ChatComponent></ChatComponent>}
                    ></Route>
                    <Route
                        path='/tipos'
                        element={
                            <AdminRoute
                                element={<TipoView></TipoView>}
                            ></AdminRoute>
                        }
                    >
                        <Route
                            path='create'
                            element={
                                <CreateTipoComponent></CreateTipoComponent>
                            }
                        ></Route>
                        <Route
                            path=':id'
                            element={
                                <AdminRoute
                                    element={<TipoView></TipoView>}
                                ></AdminRoute>
                            }
                        ></Route>
                    </Route>
                    <Route
                        path='/create'
                        element={
                            <AdminRoute
                                element={
                                    <CreateTipoComponent></CreateTipoComponent>
                                }
                            ></AdminRoute>
                        }
                    ></Route>
                    <Route
                        path='/not-found'
                        element={
                            <ErrorView
                                mensaje={'Error, página no encontrada'}
                            ></ErrorView>
                        }
                    ></Route>
                    <Route
                        path='/unauthorized'
                        element={
                            <ErrorView
                                mensaje={
                                    ' Error, no tiene permisos para entrar a esta página'
                                }
                            ></ErrorView>
                        }
                    ></Route>
                    <Route
                        path='/'
                        element={<Navigate to={'/chat'}></Navigate>}
                    ></Route>
                    <Route
                        path='*'
                        element={<Navigate to={'/not-found'}></Navigate>}
                    ></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
