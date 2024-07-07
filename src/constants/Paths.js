const Paths = {
  Landing: '/',
  Login: '/login',
  Register: '/signup',
  MyDashboard: '/dashboard',
  UserDashboard: '/user/:id',
  TeamMain: '/:id/team-task-history',
  QuestionList: '/question-list',
  TeamHistory: '/:id/task-history',
  TeamManage: '/:id/manage',
};

export default Paths;

export const ProtectedPaths = [
  Paths.MyDashboard,
  Paths.UserDashboard,
  Paths.QuestionList,
  Paths.TeamMain,
  Paths.TeamHistory,
  Paths.TeamManage,
];
