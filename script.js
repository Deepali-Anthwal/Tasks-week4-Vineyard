/* Using class QAItem to Encapsulate */
class QAItem {
    constructor(questionText, answerText) {
        this.questionText = questionText;
        this.answerText = answerText;
        this.isOpen = false; 
        this.containerElement = null;
    }

    toggleVisibility() {
        this.isOpen = !this.isOpen;
        this.containerElement.classList.toggle('is-active');
        this.updateCues();
    }

    updateCues() {
        const icon = this.containerElement.querySelector('.state-icon');
        icon.textContent = this.isOpen ? '−' : '+';
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.className = 'qa-wrapper';
        wrapper.innerHTML = `
            <div class="question-top">
                <span>${this.questionText}</span>
                <span class="state-icon">+</span>
            </div>
            <div class="answer-bottom">
                <p>${this.answerText}</p>
            </div>
        `;
        this.containerElement = wrapper;
        const header = wrapper.querySelector('.question-top');
        header.addEventListener('click', () => this.toggleVisibility());
        return wrapper;
    }
}

const Questions = [
    new QAItem(
        "What is a Linear Search?", 
        "Linear search checks every element in a list one by one until the target is found. It has a time complexity of O(n)."
    ),
    new QAItem(
        "Stack vs Queue?", 
        "A Stack follows LIFO (Last-In, First-Out), like plates. A Queue follows FIFO (First-In, First-Out), like a line for a bus."
    ),
    new QAItem(
        "What is an Array?", 
        "An array is a collection of items stored at contiguous memory locations. It allows O(1) access time via index."
    ),
    new QAItem(
        "What is 'Space Complexity'?", 
        "Space complexity is the amount of memory an algorithm needs relative to the input size. We aim for high efficiency."
    ),
    new QAItem(
        "What is Recursion?", 
        "Recursion is a technique where a function calls itself to solve smaller versions of a problem until it reaches a 'base case'."
    ),
    new QAItem(
        "What is a Binary Search?", 
        "An efficient algorithm for sorted lists. It repeatedly divides the search interval in half, giving it O(log n) complexity."
    ),
    new QAItem(
        "Null vs Undefined?", 
        "Null is an intentional empty value, while Undefined means a variable has been declared but not yet assigned a value."
    ),
    new QAItem(
        "What is a Linked List?", 
        "A linear data structure where elements (nodes) are not stored together but point to the next one using pointers."
    ),
    new QAItem(
        "What is a Hash Table?", 
        "A data structure that maps keys to values using a hash function for extremely fast data retrieval."
    ),
    new QAItem(
        "What is the difference between a Graph and a Tree?", 
        "A Tree is a type of Graph that has no cycles (loops). Every node in a tree is connected by exactly one path."
    )
];

const displayArea = document.getElementById('qa-display-area');

Questions.forEach(item => {
    displayArea.appendChild(item.render());
});