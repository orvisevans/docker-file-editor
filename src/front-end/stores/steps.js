let id = 0;
let steps = [];
let subscribers = [];

export const state = {
  get steps() {
    return steps;
  },

  set steps(value) {
    steps = value;
    subscribers.forEach((fn) => fn());
  },

  get stepIds() {
    return this.steps.map((step) => step.id);
  },
};

export const subscribe = (subscriber) => {
  subscribers.push(subscriber);
};

export const addStep = () => {
  state.steps = [...state.steps, { id: id++ }];
};
