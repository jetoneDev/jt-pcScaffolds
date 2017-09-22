export default {
    namespace: 'mainFrame',
    state: {
        logoTitle: "捷通数码科技平台",
        //文字说明
        tip: "hello World",
        //侧栏伸缩
        collapsed: false,
        //menu要支持父子
        navBar: [
            { Name: "主页", Value: "" },
            { Name: "管理", Value: "" }
        ],
        sideBar: [
            {
                Name: "流程管理", Value: [
                    {
                        Name: "系统流程", Value: "/main/flowDashBoard"
                    }
                ]
            },
            {
                Name: "组织架构管理", Value: [
                    {
                        Name: "人员管理", Value: "main/Og"
                    }
                ]
            }
        ],
        //侧栏选中
        sideBarSelected: '',
        //水平导航啦
        navBarSelected: '2'
    },
    reducers: {
        save(state, { payload: { } }) {
            return { ...state };
        },
    },
    effects: {
        *fetch({ payload: { } }, { select, call, put }) {
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },
};