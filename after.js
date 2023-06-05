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
    container: document.querySelector("meta[name='alternator-container']").getAttribute("content"),
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

    // Show an element
    var show = function (elem) {
      elem.style.display = 'block';
    };

    // Hide an element
    var hide = function (elem) {
      elem.style.display = 'none';
    };

    // Toggle element visibility
    var toggle = function (elem) {

      // If the element is visible, hide it
      if (window.getComputedStyle(elem).display === 'block') {
        hide(elem);
        return;
      }

      // Otherwise, show it
      show(elem);

    };

  const button = `<button role="button" style="position: absolute; left:50%; transform: translateX(-50%); z-index: 500; font-size:16px; background-color: black; border: none; color: white; padding: 12px 32px; text-decoration: none;
  cursor: pointer;" id="alternator-toggle">ALTERNATOR</button>`;

  const template = 
  `<div style="position: fixed; left: 0; bottom: 0; width: 100%; background-color: #d4d4d7; text-align: center; font-family: arial; display:none;" class="place-content-center" id="alternator-form">
  <div style="width: 90%; margin: 0 auto; display:block; overflow:hidden;">
  <a href="${config.guide}" target="_blank" style=" background-color: #444444; border: none; color: white; padding: 12px 32px; text-decoration: none; cursor: pointer; display:table; float:right; margin: 20px 0; font-size:16px;">Institutional Style Guide</a>
  </div>
  <form action="${action}" method="post" style="padding:20px 0; font-family: arial; width: 90%; margin: 0 auto;">
    <!-- Put HTML input fields in here and see how they fill up your sheet -->
    <textarea rows="3" placeholder="Alt text" name="alt" style="width:100%; font-family: arial; font-size:16px; margin-bottom: 10px; padding:10px; box-sizing: border-box;" required /></textarea>
    <textarea rows="3" placeholder="Description text" name="description" style="width:100%; font-family: arial; font-size:16px; margin-bottom: 10px; padding:10px; box-sizing: border-box;" /></textarea>
    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
    <input type="hidden" name="id" value="${config.id}" />
    <input type="hidden" name="url" value="${config.url}" />
    <input type="hidden" name="contact" value="${config.contact}" />
    <div>
    <input placeholder="Your Email" type="text" name="email" style="font-family: arial; font-size:16px; padding:10px;" />
    <input style="font-size:16px; background-color: black; border: none; color: white; padding: 12px 32px; text-decoration: none; margin: 4px 2px;
cursor: pointer;" type="submit" value="SUBMIT" />
    </div>
  </form>
  </div>
  `;
  
  const container = document.getElementById(config.container);
  container.insertAdjacentHTML('afterbegin', button);
  const toggleButton = document.getElementById('alternator-toggle');
  
  const article = document.querySelector('article');
  article.insertAdjacentHTML('afterend', template);
  const form = document.getElementById('alternator-form');

  toggleButton.addEventListener('click', function (event) {
    toggle(form)
  });

})();
