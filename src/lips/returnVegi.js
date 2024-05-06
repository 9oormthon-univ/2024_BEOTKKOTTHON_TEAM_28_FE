export const returnVegi = (img) => {
  switch (img) {
    case '/blueberry.png':
      return 'BLUEBERRY';
    case '/cabbage.png':
      return 'CABBAGE';
    case '/carrot.png':
      return 'CARROT';
    case '/cucumber.png':
      return 'CUCUMBER';
    case '/strawberry.png':
      return 'STRAWBERRY';
    default:
      return 'TOMATO';
  }
};
