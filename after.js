// this code will be executed after page load
(function() {
  const config = { 
    url: document.querySelector("meta[name='alternator-url']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    id: document.querySelector("meta[name='alternator-id']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    guide: document.querySelector("meta[name='alternator-guide']").getAttribute("content"),
    target: document.querySelector("meta[name='alternator-target']").getAttribute("content"),
    path: document.querySelector("meta[name='alternator-path']").getAttribute("content"),
  }

  var action = null;

  switch(config.target) {
    case "sm":
      action = `https://api.sheetmonkey.io/form/${config.path}`
      break;
    case "gs":
      action = `https://google.sheets`
      break;
    default:
      action = null;
  }

  const template = 
  `<div style="position: fixed; left: 0; bottom: 0; width: 100%; background-color: red; color: white; text-align: center;">
    <a href="${config.guide}">Institutional Style Guide</a>
    <form action="${action}" method="post">
      <!-- Put HTML input fields in here and see how they fill up your sheet -->
      <label>Alt Text<textarea name="Alt" required /></textarea></label>
      <label>Description<textarea name="Description" /></textarea></label>
      <label>User Email<input type="text" name="User" /></label>
      <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
      <input type="hidden" name="Id" value="${config.id}" />
      <input type="hidden" name="Url" value="${config.url}" />
      <input type="hidden" name="Contact" value="${config.contact}" />
      <input type="submit" value="Submit" />
    </form>
    </div>
  `;

  const article = document.querySelector('article');
  article.insertAdjacentHTML('afterend', template);
  console.log(config)
})();
