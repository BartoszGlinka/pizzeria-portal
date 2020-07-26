import React from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import PageNav from '../PageNav/PageNav';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render(){
    return (
      <div className={styles.component}>
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              <PageNav />
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth='lg'>
          <Toolbar />
          {this.props.children}
        </Container>
      </div>
    );
  }
}


export default MainLayout;
