import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div>라우터</div>
      </ChakraProvider>
    </>
  );
}

export default App;
