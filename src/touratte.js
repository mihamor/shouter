function Dispatcher(dataList){
  // private
  let isDispatching = false;
  let randomDispatchTime = getRandomInteger(1000, 5000);
  let timerId = null;

  const onDispatch = () => {
    if(!isDispatching) return;  
    randomDispatchTime = getRandomInteger(1000, 5000);
    const randomAuthorId = getRandomInteger(0, dataList.length - 1);
    const randomAuthor = dataList[randomAuthorId];
    const randomContent = getRandomText();
    const shoutEvent = new CustomEvent("shout", {
      detail: {
        author: randomAuthor,
        content: randomContent,
        addedAt : new Date()
      }
    });
    document.dispatchEvent(shoutEvent);
    clearTimeout(timerId);
    timerId = setTimeout(() => onDispatch(), randomDispatchTime);  
  }

  //public
  this.stopDispatching = () => {
    if(isDispatching) clearTimeout(timerId);
    isDispatching = false;
  }
  this.startDispatching = () => {
    const oldState = isDispatching;
    isDispatching = true;
    if(!oldState) {
      timerId = setTimeout(() => onDispatch(), randomDispatchTime);
    }
  }
  this.getState = () => isDispatching;
}

const dispatcher = new Dispatcher(authorsList);
dispatcher.startDispatching();