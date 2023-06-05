// this code will be executed after page load
(function() {
  const config = { 
    url: document.querySelector("meta[name='alternator-url']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    id: document.querySelector("meta[name='alternator-id']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    guide: document.querySelector("meta[name='alternator-guide']").getAttribute("content"),
  }
  console.log(config)
})();
