import { createStore } from "./store.js";

const initialState = { options: [], loading: false, loaded: false };
export const options = createStore(initialState);
