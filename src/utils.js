function getRandomInteger(min, max){
  if(min > max) { // swap values
    const tmp = min;
    min = max;
    max = tmp;
  }
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
}

function getRandomText(){
  const str = Math.random().toString(36).substr(2);  ; // convert num to base36
  return str;
}

function generateCommentFragment(payload, template) {
  const newCommentFragment = template.content.cloneNode(true);
  const authorNode = newCommentFragment.querySelector(".comment__autor");
  const contentNode = newCommentFragment.querySelector(".comment__content");
  const dateNode = newCommentFragment.querySelector(".comment__date");

  authorNode.textContent = payload.author.name;
  contentNode.textContent = payload.content;
  dateNode.textContent = payload.addedAt.toUTCString();

  return newCommentFragment;
}

function generateCounterFragment(author, template) {
  const newCounterFragment = template.content.cloneNode(true);
  const counterNode = newCounterFragment.querySelector(".counter");
  const authorNameNode = newCounterFragment.querySelector(".counter__author-name");
  const valueNode = newCounterFragment.querySelector(".counter__value");

  counterNode.setAttribute("key", author._id);
  authorNameNode.textContent = author.name;
  valueNode.textContent = 0;

  return newCounterFragment;
}

function incrementCounterNode(counterSectionEl, authorId){
  const counterNode = counterSectionEl.querySelector(`[key="${authorId}"]`);
  const counterValueNode = counterNode.querySelector(".counter__value");
  counterValueNode.textContent = Number(counterValueNode.textContent) + 1;
}

const removeHighlightOnNode = node => node.classList.remove("comment_highlighted");