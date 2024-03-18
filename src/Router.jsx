import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  MyPage,
  QuestionListPage,
  TaskHistoryPage,
  SignupPage,
} from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>🍀 Startup Valley ⭐</div>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<MyPage />} />
        <Route path='/question-list' element={<QuestionListPage />} />
        <Route path='/task-history' element={<TaskHistoryPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
