import LoginController from '../controllers/login/LoginController';
import FlowDashBoardController from '../controllers/flow/FlowDashBoardController';
import MainFrameController from '../controllers/mainFrame/MainFrameController';
export default {
    "/login": { component: LoginController },//登录页面
    "/main": { component: MainFrameController },//主菜单页面
    "/flow": { component: FlowDashBoardController },//首页
}

