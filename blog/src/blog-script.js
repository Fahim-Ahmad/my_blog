////////////////////////////////////////// share options at the the end of each blog-post
const blogPostDiv = document.querySelector('.blog-post');

let url = window.location.href;
let title = document.querySelector('header .title').textContent;
url = encodeURIComponent(url);
title = encodeURIComponent(title);

const shareArea = document.createElement('div');
shareArea.className = 'row align-items-center pt-4 pb-5 share-area';

function shareIcons(text, url, textColor) {
        return `
        <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" class="share-btn-twitter"><i class="fab fa-twitter mr-2 mr-lg-4 mr-md-4 ${textColor} share-btn"></i></a>
        <a href="mailto:?subject=${text}&body=${url}" target="_blank" class="share-btn-email"><i class="fas fa-envelope mr-2 mr-lg-4 mr-md-4 ${textColor} share-btn"></i></a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}" target="_blank" class="share-btn-linkedin"><i class="fa-brands fa-linkedin mr-2 mr-lg-4 mr-md-4 ${textColor} share-btn"></i></a>
        <a href="whatsapp://send?text=${text}\n${url}" target="_blank" class="share-btn-whatsapp"><i class="fab fa-whatsapp ${textColor} share-btn"></i></a>
        `
}

shareArea.innerHTML = `
        <div class="col"><hr></div>
        <div class="col-auto">
                ${shareIcons(title, url, 'text-muted')}
        </div>
        <div class="col"><hr></div>
  `;

blogPostDiv.appendChild(shareArea);

////////////////////////////////////////// share options when a text is copied from blog-posts
function addShareCopiedTextArea(event) {
        const selection = window.getSelection();
        let selectedText = selection.toString();
    
        const shareCopiedTextArea = document.querySelector('.share-copied-text-area');
        if (shareCopiedTextArea && event.target.closest('.share-btn')) {return;}
        if (shareCopiedTextArea && !shareCopiedTextArea.contains(event.target)) {shareCopiedTextArea.remove();}
    
        if (selectedText) {
            const range = selection.getRangeAt(0);
    
            // defined 'blogPostDiv' at the beginning of the document
            const selectionInBlogPostDiv = blogPostDiv.contains(range.commonAncestorContainer);
            const selectionInShareCopiedTextArea = shareCopiedTextArea === null ? false : shareCopiedTextArea.contains(range.commonAncestorContainer);
    
            if (selectionInBlogPostDiv && !selectionInShareCopiedTextArea) {
                selectedText = encodeURIComponent(selectedText);
    
                const newShareCopiedTextArea = document.createElement('div');
                newShareCopiedTextArea.className = 'row d-flex align-items-center p-1 m-1 bg-secondary share-copied-text-area';
    
                newShareCopiedTextArea.innerHTML = `
                    <div class="d-flex align-items-center">
                        <span class="mr-4 text-light">Share this selection: </span>
                        ${shareIcons(selectedText, url, 'text-light')}
                    </div>
                `;
    
                const lastElement = selection.extentNode.parentElement;
                lastElement.insertAdjacentElement('afterend', newShareCopiedTextArea);
            }
        }
}

document.addEventListener('mouseup', addShareCopiedTextArea);
document.addEventListener('touchend', addShareCopiedTextArea);