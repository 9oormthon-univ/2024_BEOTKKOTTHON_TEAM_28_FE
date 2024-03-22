export const returnProfileImg = (img) => {
  switch (img) {
    case 'BLUEBERRY':
      return '/blueberry.png';
    case 'CABBAGE':
      return '/cabbage.png';
    case 'CARROT':
      return '/carrot.png';
    case 'CUCUMBER':
      return '/cucumber.png';
    case 'STRAWBERRY':
      return '/strawberry.png';
    default:
      return '/tomato.png';
  }
};
