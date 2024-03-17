import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  MyPage,
  QuestionListPage,
  TaskHistoryPage,
  DashboardPage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>🍀 Startup Valley ⭐</div>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/question-list' element={<QuestionListPage />} />
        <Route path='/task-history' element={<TaskHistoryPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
