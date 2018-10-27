import { getItem } from '@/services/home';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
    namespace: 'home',

    state: {
        data: {},

    },

    effects: {
        *fetch({ payload, callback }, { call, put }) {
            console.warn('getItem', payload);
            const response = yield call(getItem);
            if(response && response.ok){
                const result = response.data[payload.type];
                yield put({
                    type: 'save',
                    payload: result,
                });
                if(callback) callback();
            }else {
                message.error("加载失败")
            }

        }
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                data: action.payload,
            };
        }
    },
};
