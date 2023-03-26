import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import { rootReduser } from './reducer';
const enhancer = devToolsEnhancer();
export const store = createStore(rootReduser, enhancer);
