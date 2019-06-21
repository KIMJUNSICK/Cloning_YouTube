import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const myCommentList = document.querySelectorAll("#jsMyComment");
const videoId = window.location.href.split("/videos/")[1];

const ID_MYCOMMENT_REMOVE = "myComment_remove";

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
};
const handleRemoveComment = async event => {
  const myComment = event.target.parentNode;
  const commentId = myComment.children[1].innerHTML;
  // myComment.parentNode.setAttribute("id", ID_MYCOMMENT_REMOVE);

  if (!commentId) {
    return;
  }

  const response = await axios({
    url: `/api/${videoId}/comment/${commentId}/remove`,
    method: "POST",
    commentId
  });

  if (response.status === 200) {
    decreaseNumber();
    myComment.parentNode.remove();
    console.log("Misson Complete");
  }
};

// Add Comment

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment
    }
  });
  if (response.status === 200) {
    addComment(comment);
  }
};

const handleSubmit = event => {
  event.preventDefault();
  const conmmentInput = addCommentForm.querySelector("input");
  const comment = conmmentInput.value;
  sendComment(comment);
  conmmentInput.value = "";
};

const init = () => {
  addCommentForm.addEventListener("submit", handleSubmit);
  for (let i = 0; i < myCommentList.length; i += 1) {
    myCommentList[i].addEventListener("click", handleRemoveComment);
  }
};

if (addCommentForm) {
  init();
}
