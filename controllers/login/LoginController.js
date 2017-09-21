import React from 'react';
import PropTypes from 'prop-types';
import { LoginForm } from '../../components/Login';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import { Layout, Menu, Row, Col } from 'antd';
import CompanyImg from '../../img/jetone.logo.png';
const { Header, Footer, Sider, Content } = Layout;
const LoginController = props => {
    function onMenuSelect(params) {
        let key = params.replace(".$"), href;
        console.log(key);
        switch (key) {
            case "home":
                href = "http://www.jetone.cn/";
                break;
            case "about":
                href = "http://www.jetone.cn/about/"
                break;
        }
        // window.location.href = href;
    }
    //api驱动
    function login(params) {
        window.location.href = './dashBoard';
    }
    return (
        <div styleName="container">
            <Layout>
                <Header styleName="head">
                    <Row styleName="navBar">
                        <Col span={6}>
                            <div styleName="logoBar">
                                <a styleName="logo" href="/index-cn">
                                    <img styleName="logoImage" alt="logo" src={CompanyImg} />
                                    <span styleName="logoSpan">捷通数码平台</span>
                                </a>
                            </div>
                        </Col>
                        <Col span={18} >
                            <Menu
                                onSelect={onMenuSelect}
                                theme="light"
                                mode="horizontal"
                                defaultSelectedKeys={["3"]}
                                styleName='navBar'
                            >
                                <Menu.Item key="home">主页</Menu.Item>
                                <Menu.Item key="about">关于捷通</Menu.Item>
                                <Menu.Item key="admin">后端管理</Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Content styleName="content">
                    <div styleName="loginForm">
                        <LoginForm onSubmit={null} />
                    </div>
                </Content>
                <Footer styleName="foot">
                    <div styleName="footImg">
                        <img src="http://www.gghypt.net/images/new_login/gray.png" />
                    </div>
                    <span >
                        Ant Design ©2017~2020 Created by 捷通科技有限公司
                </span>
                </Footer>
            </Layout>

        </div>

    );
};

LoginController.propTypes = {

};

export default CSSModules(LoginController, styles);


