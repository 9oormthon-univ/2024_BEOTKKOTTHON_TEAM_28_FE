import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, MyPage, QuestionListPage } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>🍀 Startup Valley ⭐</div>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/question-list' element={<QuestionListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
