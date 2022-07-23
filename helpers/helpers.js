//a function to return a time that converted from seconds to minutes
const getTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);

  return `${minutes}:${seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;
};

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
  newState.forEach((value) => {
    const findedIndex = oldState.findIndex((data) => data.id === value.id);
    if (findedIndex !== -1)
      oldState[findedIndex] = { ...oldState[findedIndex], ...value };
  });
  return oldState;
};

export { isInitialized, getUpdatedState, getTime };
