import './app.scss';
import { RouterProvider } from 'react-router-dom';
import { r } from './utils/Router';
import { AuthProvider } from './context/authContext';


const App = () => {
    return (
        <AuthProvider>
            <RouterProvider router={r} />
        </AuthProvider>
    );
};

export default App;
