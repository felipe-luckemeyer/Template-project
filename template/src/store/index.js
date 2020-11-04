import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { app } from "./reducers/";

const loggerMiddleware = createLogger();

const middlewares = applyMiddleware(thunkMiddleware, loggerMiddleware);

const reducers = combineReducers({
  app
});

export const store = createStore(
  reducers,
  compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export * from "./actions";
