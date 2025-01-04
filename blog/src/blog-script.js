let url = window.location.href;
let title = document.querySelector('header .title').textContent;
const blogPostDiv = document.querySelector('.blog-post');

// console.log(url);
// console.log(title);
// console.log(blogPostDiv);

url = encodeURIComponent(url);
title = encodeURIComponent(title);

const shareArea = document.createElement('div');
shareArea.className = 'row align-items-center pt-4 pb-5 share-area';

shareArea.innerHTML = `
        <div class="col"><hr></div>

        <div class="col-auto">
                <a href="https://twitter.com/intent/tweet?text=${title}&url=${url}" target="_blank" class="share-btn-twitter">
                        <i class="fab fa-twitter mr-2 mr-lg-4 mr-md-4 text-muted share-btn"></i>
                </a>
                <a href="mailto:?subject=${title}&body=${url}" target="_blank" class="share-btn-email">
                        <i class="fas fa-envelope mr-2 mr-lg-4 mr-md-4 text-muted share-btn"></i>
                </a>

                <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}" target="_blank" class="share-btn-linkedin">
                        <i class="fa-brands fa-linkedin mr-2 mr-lg-4 mr-md-4 text-muted share-btn"></i>
                </a>

                <a href="whatsapp://send?text=${title}\n${url}" target="_blank" class="share-btn-whatsapp">
                        <i class="fab fa-whatsapp text-muted share-btn"></i>
                </a>
        </div>

        <div class="col"><hr></div>
  `;

blogPostDiv.appendChild(shareArea);

// share options when a text is copied from blog-posts
let shareCopiedTextAreaVisible = false;

document.addEventListener('mouseup', (event) => {
        const selection = window.getSelection();
        let selectedText = selection.toString();

        const shareCopiedTextArea = document.querySelector('.share-copied-text-area');

        if (shareCopiedTextArea && event.target.closest('.share-btn')) {
            return;
        }

        if (shareCopiedTextArea && !shareCopiedTextArea.contains(event.target)) {
                shareCopiedTextArea.remove();
                shareCopiedTextAreaVisible = false;
        }

        if (selectedText) {
                const range = selection.getRangeAt(0);
                const selectionInBlogPostDiv = blogPostDiv.contains(range.commonAncestorContainer);

                const selectionInShareCopiedTextArea = shareCopiedTextArea === null ? false : shareCopiedTextArea.contains(range.commonAncestorContainer);

                if (shareCopiedTextArea) {shareCopiedTextArea.remove();}

                if (selectionInBlogPostDiv && !selectionInShareCopiedTextArea) {
                        selectedText = encodeURIComponent(selectedText);

                        const shareCopiedText = document.createElement('div');
                        shareCopiedText.className = 'row align-items-center p-1 m-1 bg-secondary share-copied-text-area';

                        shareCopiedText.innerHTML = `
                                <div>
                                        <span class="mr-4 text-light">Share this selection: </span>
                                        <a href="https://twitter.com/intent/tweet?text=${selectedText}&url=${url}" target="_blank" class="share-btn share-btn-twitter">
                                                <i class="fab fa-twitter mr-2 mr-lg-4 mr-md-4 text-light share-btn"></i>
                                        </a>
                                        <a href="mailto:?subject=${selectedText}&body=${url}" target="_blank" class="share-btn-email">
                                                <i class="fas fa-envelope mr-2 mr-lg-4 mr-md-4 text-light share-btn"></i>
                                        </a>

                                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${selectedText}" target="_blank" class="share-btn-linkedin">
                                                <i class="fa-brands fa-linkedin mr-2 mr-lg-4 mr-md-4 text-light share-btn"></i>
                                        </a>

                                        <a href="whatsapp://send?text=${selectedText}\n${url}" target="_blank" class="share-btn-whatsapp">
                                                <i class="fab fa-whatsapp text-light share-btn"></i>
                                        </a>
                                </div>
                        `;

                        const lastElement = selection.extentNode.parentElement
                        lastElement.insertAdjacentElement('afterend', shareCopiedText);

                        shareCopiedTextAreaVisible = true;
                }
        }
});
