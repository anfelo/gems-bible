if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(registration => console.log(registration))
    .catch(err => console.error('...', err));
}

console.log('Hello app');