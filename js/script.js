const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";
learning.learningGoals = [
    "Building JS Programs",
    "Learn React",
    "Make portfolio",
    "Get a job!:)"
]
learning.category = "Front End Development";
learning.topicImportance = "High";

//console.log(learning);
learning.topic = "JavaScript";
learning.learningGoals.splice(2, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}!`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
