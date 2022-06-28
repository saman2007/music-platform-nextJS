//a function to see if there is a specific key in local storage
const isInitialized = (item) => {
  const lSDatas = localStorage.getItem(item);
  if (!lSDatas) {
    localStorage.setItem(item, JSON.stringify([]));
  }

  return !!lSDatas;
};

//a function to merge an old state with updated state
const getUpdatedState = (oldState, newState) => {
  oldState = JSON.parse(JSON.stringify(oldState));
  newState.forEach((value, index) => {
    const findedIndex = oldState.findIndex((data) => data.id === value.id);
    if (findedIndex !== -1) oldState[index] = { ...oldState[index], ...value };
  });

  return oldState;
};

export { isInitialized, getUpdatedState };
