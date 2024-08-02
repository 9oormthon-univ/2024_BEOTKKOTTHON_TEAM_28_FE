const Paths = {
  Landing: '/',
  Login: '/login',
  Register: '/signup',
  MyDashboard: '/dashboard',
  UserDashboard: '/user/:id',
  TeamMain: '/team-task-history/:id',
  QuestionList: '/question-list',
  TeamHistory: '/:id/task-history',
  TeamManage: '/:id/manage',
};

export default Paths;

export const ProtectedPaths = [
  Paths.MyDashboard,
  Paths.UserDashboard,
  Paths.TeamMain,
  Paths.TeamHistory,
  Paths.TeamManage,
];

export const ProtectedWithLoginPaths = [Paths.Login, Paths.Register];
