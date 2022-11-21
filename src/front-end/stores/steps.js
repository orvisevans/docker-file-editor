import { createStore } from "./store.js";

let id = 0;
const initialState = { steps: [] };

export const steps = createStore(initialState);

// Actions
export function addStep() {
  steps.steps = [...steps.steps, createStep()];
}
const createStep = () => createStore({ id: id++ });
