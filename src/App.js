import { ThemeProvider } from 'styled-components';
import  Home  from './Pages/Home.js'
import GlobalStyle from './Styles/GlobalStyles.js'

import theme from './Styles/themes/themeProvider.js'

function App() {
  return (
     <div>
       <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Home />
       </ThemeProvider>
       
     </div>
  );
}

export default App;
