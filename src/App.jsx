import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './pages';
import Router from './Router';
import theme from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
