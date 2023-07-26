const button = document.querySelector('.click-to-copy');
const copytext = document.querySelector('.contact-form_copy-text');

const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  copytext.textContent = 'Copied!';
  setTimeout(() => {
    copytext.textContent = '(click to copy!)';
  }, 4000);
}

const copyToClipboard = (str) => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

// Fire the event on click
button.addEventListener('click', clickToCopy);