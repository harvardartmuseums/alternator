// this code will be executed after page load
(function() {
  const config = { 
    url: document.querySelector("meta[name='alternator-url']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    id: document.querySelector("meta[name='alternator-id']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    guide: document.querySelector("meta[name='alternator-guide']").getAttribute("content"),
  }

  const template = 
  `<div style="position: fixed; left: 0; bottom: 0; width: 100%; background-color: red; color: white; text-align: center;">
    <form action="https://api.sheetmonkey.io/form/go6K41rAhxMTpjKuUAaASk" method="post">
      <!-- Put HTML input fields in here and see how they fill up your sheet -->
      <label>Example Field: <input type="text" name="Example Header" required /></label>
      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <input type="submit" value="Submit" />
    </form>
    </div>
  `;

  const article = document.querySelector('article');
  article.insertAdjacentHTML('afterend', template);
  console.log(config)
})();
