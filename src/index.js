document.addEventListener('DOMContentLoaded', event => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => console.log(registration))
      .catch(err => console.error('...', err));
  }

  fetch('https://firestore.googleapis.com/v1/projects/gemsdeck-9e9a8/databases/(default)/documents/gems')
    .then(response => response.json())
    .then(console.log)
    .catch(error => {
      console.log(error);
    });
});
