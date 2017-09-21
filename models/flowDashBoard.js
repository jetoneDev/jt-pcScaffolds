export default {
    namespace: 'flowDashBoard',
    state: {
        dataSource: [
            { FlowName: "测试流程", FlowId: 1 },
            { FlowName: "报销流程", FlowId: 1 },
            { FlowName: "报销流程2", FlowId: 1 },
            { FlowName: "流程3", FlowId: 1 },
        ],
        action: ""
    },
    reducers: {
        save(state, { payload: { } }) {
            return { ...state, };
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