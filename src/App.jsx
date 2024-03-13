import { ChakraProvider } from '@chakra-ui/react';
import Router from './Router';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
