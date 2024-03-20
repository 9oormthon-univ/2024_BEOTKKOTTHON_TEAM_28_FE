import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  ManagePage,
  MyPage,
  QuestionListPage,
  TaskHistoryPage,
  SignupPage,
  LandingPage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<MyPage />} />
        <Route path='/question-list' element={<QuestionListPage />} />
        <Route path='/task-history' element={<TaskHistoryPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/:id/manage' element={<ManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
