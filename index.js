export default function Observer() {
  let currentElement = "";
  let currentCallback = "";
  let currentRootElement = null;
  let currentThreshold = 1.0;
  let currentOffset = "0px";
  let count = 0;
  let database = {};

  const onCallbackCalled = callback => {
    return event => {
      callback({
        isVisible: event[0].isIntersecting,
        intersectionRatio: event[0].intersectionRatio
      });
    };
  };

  this.removeWatcher = () => {
    Object.keys(database).forEach(item => {
      database[item].intersection.unobserve(database[item].element);
    });
  };

  this.observeElement = (element = "") => {
    if (!element)
      throw new Error("Element need to be observed cannot be empty");
    currentElement = element;
    return this;
  };

  this.setThreshold = (value = "") => {
    if (!value) throw new Error("Threshold value is required");
    currentThreshold = value;
    return this;
  };

  this.setCallback = (callback = "") => {
    if (!callback) throw new Error("Callback is required");
    if (typeof callback !== "function")
      throw new Error("Callback should be type of function");

    currentCallback = callback;
    return this;
  };

  this.setRootElement = (element = "") => {
    if (!element) throw new Error("Root element  cannot be empty");
    currentRootElement = element;
    return this;
  };

  this.setOffset = (offset = "") => {
    if (!offset) throw new Error("Offset of element  cannot be empty");
    currentOffset = offset;
    return this;
  };

  this.watch = () => {
    if (!currentElement) throw new Error("Element is required to be observed");
    if (!currentCallback) throw new Error("Callback is required");
    const options = {
      root: currentRootElement,
      rootMargin: currentOffset,
      threshold: currentThreshold
    };
    const intersection = new IntersectionObserver(
      onCallbackCalled(currentCallback),
      options
    );
    intersection.observe(currentElement);
    count++;
    database = {
      ...database,
      [count]: { element: currentElement, intersection }
    };

    currentElement = "";
    currentCallback = "";
    currentThreshold = 1.0;
    currentRootElement = null;
    currentOffset = "0px";
  };
}
