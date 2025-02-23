

// HTML에서 모든 주석 제거 
document.addEventListener("DOMContentLoaded", function () {
    function removeComments(node) {
        for (let i = node.childNodes.length - 1; i >= 0; i--) {
            let child = node.childNodes[i];
            if (child.nodeType === Node.COMMENT_NODE) {
                child.remove(); 
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                removeComments(child); 
            }
        }
    }
    removeComments(document);
});
