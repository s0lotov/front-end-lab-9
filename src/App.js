import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import { selectLogoPath, selectMenuList } from './store/doSlice';
import './App.css';

class App extends React.Component {
  render() {
    const { logoPath, menuList } = this.props;

    return (
      <div className="app">
        <Header title="Header"/>
        <div className="main-content">
          <SideBar title="My Sidebar" menuList={menuList} logoPath={logoPath}/>
          <Content title="Content"/>
        </div>
        <Footer title="Footer" menuList={menuList}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logoPath: selectLogoPath(state),
  menuList: selectMenuList(state),
});

export default connect(mapStateToProps)(App);
