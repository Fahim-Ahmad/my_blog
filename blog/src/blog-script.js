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
                        <i class="fab fa-twitter mr-2 mr-lg-4 mr-md-4 text-muted"></i>
                </a>
                <a href="mailto:?subject=${title}&body=${url}" target="_blank" class="share-btn-email">
                        <i class="fas fa-envelope mr-2 mr-lg-4 mr-md-4 text-muted"></i>
                </a>

                <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}" target="_blank" class="share-btn-linkedin">
                        <i class="fa-brands fa-linkedin mr-2 mr-lg-4 mr-md-4 text-muted"></i>
                </a>

                <a href="whatsapp://send?text=${title}\n${url}" target="_blank" class="share-btn-whatsapp">
                        <i class="fab fa-whatsapp text-muted"></i>
                </a>
        </div>

        <div class="col"><hr></div>
  `;

blogPostDiv.appendChild(shareArea);
