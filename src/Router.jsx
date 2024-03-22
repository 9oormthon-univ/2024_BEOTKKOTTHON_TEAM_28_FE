import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  LandingPage,
  Layout,
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
        <Route
          path='/'
          element={
            <Layout>
              <LandingPage />
            </Layout>
          }
        />
        <Route
          path='/:id/team-task-history'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path='/dashboard'
          element={
            <Layout>
              <MyPage />
            </Layout>
          }
        />
        <Route
          path='/question-list'
          element={
            <Layout>
              <QuestionListPage />
            </Layout>
          }
        />
        <Route
          path='/:id/task-history'
          element={
            <Layout>
              <TaskHistoryPage />
            </Layout>
          }
        />
        <Route
          path='/signup'
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />
        <Route
          path='/:id/manage'
          element={
            <Layout>
              <ManagePage />
            </Layout>
          }
        />
        <Route
          path='/user/:id'
          element={
            <Layout>
              <UserPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
