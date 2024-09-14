import Home from '../pages/Home';
import ResponseAPI from '../ResponseDto/ResponseDto';

export default [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/response',
        element: <ResponseAPI/>
    }
];