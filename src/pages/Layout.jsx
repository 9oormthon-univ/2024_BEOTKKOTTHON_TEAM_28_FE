import { Footer, Header } from '../component/common/layout';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
