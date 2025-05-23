import { createBrowserRouter } from 'react-router-dom';
import { PATH } from '@/constants/path';
import HomePage from '@/pages/HomePage';
import TestPage from '@/pages/TestPage';
import ResultPage from '@/pages/ResultPage';

const Routes = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <HomePage />,
  },
  {
    path: PATH.TEST,
    element: <TestPage />,
  },
  {
    path: PATH.RESULT,
    element: <ResultPage />,
  },
]);

export default Routes;
