export default {
    namespace: 'login',
    state: {
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