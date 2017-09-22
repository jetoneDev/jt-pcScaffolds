import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout, Menu, Icon, Card, Button, Dropdown, Collapse, Col, Row } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
const actionStyle = {
    marginTop: '8px'
}
const pageStyle = {
    height: '100%',
    width: '100%'
}

const FlowCardList = props => {
    const menu =
        <Menu onClick={null}>
            <Menu.Item key="1">新增</Menu.Item>
            <Menu.Item key="2">批量删除</Menu.Item>
        </Menu>;
    const action = <Dropdown overlay={menu}>
        <Button style={actionStyle}>
            操作 <Icon type="down" />
        </Button>
    </Dropdown>;
    return (
        <Card title="流程列表" noHovering extra={action}>
            {props.data.map((x, i) => <Card.Grid key={`flow_${i}`} style={gridStyle}>
                {x.FlowName}
            </Card.Grid>)}
        </Card>
    )

}


const FlowDashBoardController = ({ dispatch, flowDashboard: state }) => {
    return (
         <FlowCardList data={state.dataSource} />
    );
};

FlowDashBoardController.propTypes = {

};


function mapStateToProps(state) {
    return { flowDashboard: state.flowDashBoard };
}

export default connect(mapStateToProps)(FlowDashBoardController);
