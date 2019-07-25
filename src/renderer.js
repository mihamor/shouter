const commentSectionEl = document.getElementById("section");
const commentTemplateEl = document.getElementById("comment-template");
const dispatchButtonEl = document.getElementById("dispatch-button");
const counterTemplateEl = document.getElementById("counter-template");
const counterSectionEl = document.getElementById("counter-wrapper"); 

document.addEventListener("shout", onShout);
dispatchButtonEl.addEventListener("click", onButtonClick);
window.onload = onLoad;


function onShout(event){

  const author = event.detail.author;
  incrementCounterNode(counterSectionEl, author._id);

  const newCommentFragment = generateCommentFragment(event.detail, commentTemplateEl);
  const commentNode = newCommentFragment.querySelector(".comment");
  commentSectionEl.appendChild(newCommentFragment);
  setTimeout(() => removeHighlightOnNode(commentNode), 1000);
}

function onLoad(event){
  authorsList.forEach(author => {
    const newCounterFragment = generateCounterFragment(author, counterTemplateEl);
    counterSectionEl.appendChild(newCounterFragment);
  });
}

function onButtonClick(event){
  const isDispatching = dispatcher.getState();
  isDispatching ? dispatcher.stopDispatching() : dispatcher.startDispatching();
  event.target.innerText = isDispatching ? "Start dispatch" : "Stop dispatch";
}
