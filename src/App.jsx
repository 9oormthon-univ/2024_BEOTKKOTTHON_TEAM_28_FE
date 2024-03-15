import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './pages';
import Router from './Router';
import chakraTheme from './styles/chakraTheme';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
