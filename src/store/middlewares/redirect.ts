// import browserHistory from '../../browser-history';
// import {Middleware} from 'redux';
// import {rootReducer} from '../root-reducer';
// import { redirectToRoute } from '../action';

// type Reducer = ReturnType<typeof rootReducer>;

// export const redirect: Middleware<unknown, Reducer> =
//    (_store) =>
//      (next) =>
//        (action) => {
//          if (action.type === redirectToRoute.type) {
//            browserHistory.push(action.payload);
//          }

//          return next(action);
//        };
export {};
