export const getPartName = (part) => {
  switch (part) {
    case 'PM':
      return '기획';
    case 'DESIGN':
      return '디자인';
    case 'FRONTEND':
      return '프론트엔드';
    case 'BACKEND':
      return '백엔드';
    default:
      return '미지정';
  }
};
