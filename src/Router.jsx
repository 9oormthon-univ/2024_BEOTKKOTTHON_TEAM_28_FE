import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LandingPage,
  LoginPage,
  ManagePage,
  MyPage,
  QuestionListPage,
  SignupPage,
  TaskHistoryPage,
  UserPage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/:id/team-task-history' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<MyPage />} />
        <Route path='/question-list' element={<QuestionListPage />} />
        <Route path='/:id/task-history' element={<TaskHistoryPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/:id/manage' element={<ManagePage />} />
        <Route path='/user/:id' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
