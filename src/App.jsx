import './App.css'
import { ChatComponent } from './components/Chat/ChatComponent.jsx'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useNavigate,
} from 'react-router-dom'

import { TipoView } from './components/Tipo/TipoView.jsx'
import { AdminRoute } from './containers/Admin/AdminRoute.jsx'
import { ErrorView } from './components/Vistas/ErrorView.jsx'
import { CreateTipoComponent } from './components/Tipo/CreateTipoComponent.jsx'
import { LoginView } from './components/User/LoginView.jsx'
import { NavbarComponent } from './components/Extra/NavbarComponent.jsx'

function App() {
    const isAdmin = window.location.href.split('/')[3] == 'admin' ? true : false
    return (
        <>
            {isAdmin && <NavbarComponent></NavbarComponent>}
            <Router>
                <Routes>
                    <Route
                        path='/chat'
                        element={<ChatComponent></ChatComponent>}
                    ></Route>
                    <Route
                        path='/admin/tipos'
                        element={
                            <AdminRoute
                                element={<TipoView></TipoView>}
                            ></AdminRoute>
                        }
                    ></Route>
                    <Route
                        path='/admin/tipos/create'
                        element={
                            <AdminRoute
                                element={
                                    <CreateTipoComponent></CreateTipoComponent>
                                }
                            ></AdminRoute>
                        }
                    ></Route>
                    <Route
                        path='/admin/tipos/edit/:id'
                        element={
                            <AdminRoute
                                element={
                                    <CreateTipoComponent></CreateTipoComponent>
                                }
                            ></AdminRoute>
                        }
                    ></Route>
                    <Route
                        path='/admin/login'
                        element={<LoginView></LoginView>}
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
