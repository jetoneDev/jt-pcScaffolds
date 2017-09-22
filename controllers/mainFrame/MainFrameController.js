import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout, Menu, Icon, Card, Button, Dropdown, Collapse, Col, Row, Breadcrumb, Popover } from 'antd';
import TipPanel from '../../components/TipPanel';
import * as $$ from '../../js/utility';
import styles from './style.css';
const { Header, Sider, Content, Footer } = Layout;
const Panel = Collapse.Panel;
const { SubMenu } = Menu;
//todo：NavBar选中.AactionBar,css整理   
//用了connect 后react-cssmodule失效
const MainFrameController = ({ dispatch, mainFrame: state, children }) => {
    //创建顶部导航栏
    function createNavBar(params) {
        const menu =
            <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[state.navBarSelected]}
                className={styles.navBar}
                onSelect={mainMenuSelect}>
                {state.navBar.map((x, i) =>
                    <Menu.Item className={state.navBarSelected == `navBar_${i}` ? styles.navBarItemSelected : styles.navBarItem} key={`navBar_${i}`}>{x.Name}</Menu.Item>
                )}
            </Menu>
        return menu;
    }
    //创建侧栏
    function createSideBar() {
        const sideBar =
            <div>
                <Menu theme="light" mode="inline" onSelect={sideBarMenuSelect}>
                    <Menu.Item key='nav' className={`${styles.hideItem} ${styles.allNavIcon}`}>
                        <Icon
                            className="trigger"
                            type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={toggle}
                        />
                        <span>网站导航</span>
                    </Menu.Item>
                </Menu>
                <Menu theme="light" mode="inline" onSelect={sideBarMenuSelect}>
                    {/*<Menu.Item key='nav' className={styles.hideItem} >
                    <Icon
                        className="trigger"
                        type={state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                    <span>网站导航</span>
                </Menu.Item>*/}
                    {state.sideBar.map((x, i) => {
                        let type;
                        switch (x.Name) {
                            case '流程管理':
                                type = 'fork';
                                break;
                            case '组织架构管理':
                                type = 'user';
                                break;
                            default:
                                break;
                        }
                        return <SubMenu className={styles.sideBarItem} key={`sub${i}`} title={<span><Icon type={type} /> {state.collapsed ? '' : x.Name}</span>}>
                            {x.Value.map((y, j) => <Menu.Item style={{ backgroundColor: '#fbfbfb' }} key={y.Name}>{y.Name}</Menu.Item>)}
                        </SubMenu>
                    })}</Menu>
            </div>
        return sideBar;
    }
    //创建用户功能栏
    function createUserActionBar() {
        const userAction = <Menu className={styles.cc} mode='vertical' onClick={actionBarClick}>
            <Menu.Item>个人资料</Menu.Item>
            <Menu.Item>退出</Menu.Item>
        </Menu>
        return userAction;
    }
    //侧栏隐藏
    function toggle(params) {
        state.collapsed = !state.collapsed;
        dispatch({ type: 'mainFrame/save', payload: { ...state } });
    }
    function mainMenuSelect(params) {
        state.navBarSelected = params.key;
        dispatch({ type: 'mainFrame/save', payload: { ...state } });
    }
    function sideBarMenuSelect(params) {
        state.sideBarSelected = params.key;
        dispatch({ type: 'mainFrame/save', payload: { ...state } });
        $$.routerTo('/#/main/flow');

    }
    function actionBarClick(params) {
        console.log(params)
    }


    return (
        <div>
            <Layout className={styles.container_div}>
                <Row className={styles.head}>
                    <Col span={4}><span className={styles.title}>{state.logoTitle}</span></Col>
                    <Col span={14}>
                        {createNavBar()}
                    </Col>
                    <Col span={6}>
                        <div className={styles.actionBar}>
                            <Icon type="user" className={styles.userLogo} />
                            <Popover placement="bottom" className={styles.cc} content={createUserActionBar()} trigger="hover">
                                <span className={styles.userName}>Hi:xxx</span>
                            </Popover>
                        </div>
                    </Col>
                </Row>
                <Layout className={styles.contentContainer}>
                    <Sider
                        collapsible
                        collapsed={state.collapsed}
                        trigger={null}
                        className={styles.sideBar}
                    >

                        {createSideBar()}
                    </Sider>
                    <Layout >
                        <Header className={styles.tipBar}>
                            <TipPanel title={state.sideBarSelected}>
                                <span>{state.tip}</span>
                            </TipPanel>
                        </Header>
                        <Content className={styles.content}>
                            {children || null}
                        </Content>
                        <Footer className={styles.footer}>
                            ©2017 Created by Jetone
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};

MainFrameController.propTypes = {

};

function mapStateToProps(state) {
    return { mainFrame: state.mainFrame };
}
export default connect(mapStateToProps)(MainFrameController);



