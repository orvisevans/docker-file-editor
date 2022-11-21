/**
 * Creates an object that can be watched for changes.
 * @param {Object} initialState
 * @returns {Proxy} A proxy object that can be watched for changes.
 */
export function createStore(initialState) {
  let subscribers = [];

  const proxyHandler = {
    set(target, prop, value, proxy) {
      target[prop] = value;
      if (prop !== "subscribers") {
        subscribers.forEach((fn) => fn(proxy));
      }
      return true;
    },
  };

  const proxy = new Proxy(initialState, proxyHandler);

  /**
   * This function is called when the store is changed.
   * @callback subscriptionCallback
   * @param {Proxy} store
   */

  /**
   * Begin watching for changes to the store.
   * @param {subscriptionCallback} fn The function to call when the store changes
   */
  proxy.$subscribe = (fn) => {
    subscribers.push(fn);
  };

  /**
   * Stop watching for changes to the store.
   * @param {subscriptionCallback} fn The function to stop calling when the store changes
   */
  proxy.$unsubscribe = (fn) => {
    subscribers = subscribers.filter((subscriber) => subscriber !== fn);
  };

  return proxy;
}
