import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from '../pages/Landing';
import Layout from '../components/components/Layout';
import Login from '../pages/Login';
import Mobile from '../pages/Mobile';
import MyDashboard from '../pages/MyDashboard';
import NotFound from '../pages/NotFound';
import Paths from '../constants/Paths';
import QuestionList from '../pages/QuestionList';
import Register from '../pages/Register';
import TeamHistory from '../pages/TeamHistory';
import TeamMain from '../pages/TeamMain';
import TeamManage from '../pages/TeamManage';
import UserDashboard from '../pages/UserDashboard';

const RoutesList = [
  { path: Paths.Landing, element: <Landing />, isMobileVisible: true, isFooter: true },
  { path: Paths.Login, element: <Login />, isMobileVisible: true, isFooter: true },
  { path: Paths.Register, element: <Register />, isMobileVisible: true, isFooter: true },
  { path: Paths.MyDashboard, element: <MyDashboard />, isMobileVisible: false },
  { path: Paths.UserDashboard, element: <UserDashboard />, isMobileVisible: false },
  { path: Paths.TeamMain, element: <TeamMain />, isMobileVisible: false },
  { path: '/team-task-history', element: <TeamMain />, isMobileVisible: false },
  { path: '/:id/team-task-history', element: <TeamMain />, isMobileVisible: false },
  { path: Paths.QuestionList, element: <QuestionList />, isMobileVisible: false },
  { path: Paths.TeamHistory, element: <TeamHistory />, isMobileVisible: false },
  { path: '/task-history', element: <TeamHistory />, isMobileVisible: false },
  { path: Paths.TeamManage, element: <TeamManage />, isMobileVisible: false },
  { path: '*', element: <NotFound />, isMobileVisible: false },
];

const Router = () => {
  const isMobile =
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
      navigator.userAgent,
    ) && window.innerWidth <= 768;

  return (
    <BrowserRouter>
      <Routes>
        {RoutesList.map(({ path, element, isMobileVisible, isFooter }, index) => (
          <Route
            key={index}
            path={path}
            element={
              isMobileVisible ? (
                <Layout isFooter={!!isFooter}>{element}</Layout>
              ) : (
                <Mobile isMobile={isMobile} isFooter={!!isFooter}>
                  <Layout>{element}</Layout>
                </Mobile>
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
