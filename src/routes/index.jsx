import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing';
import Layout from '../components/components/Layout';
import Login from '../pages/Login';
import MyDashboard from '../pages/MyDashboard';
import Paths from '../constants/Paths';
import QuestionList from '../pages/QuestionList';
import Register from '../pages/Register';
import TeamHistory from '../pages/TeamHistory';
import TeamMain from '../pages/TeamMain';
import TeamManage from '../pages/TeamManage';
import UserDashboard from '../pages/UserDashboard';

const RoutesList = [
  { path: Paths.Landing, element: <Landing /> },
  { path: Paths.Login, element: <Login /> },
  { path: Paths.Register, element: <Register /> },
  { path: Paths.MyDashboard, element: <MyDashboard /> },
  { path: Paths.UserDashboard, element: <UserDashboard /> },
  { path: Paths.TeamMain, element: <TeamMain /> },
  { path: Paths.QuestionList, element: <QuestionList /> },
  { path: Paths.TeamHistory, element: <TeamHistory /> },
  { path: Paths.TeamManage, element: <TeamManage /> },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesList.map(({ path, element }, index) => (
          <Route key={index} path={path} element={<Layout>{element}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
