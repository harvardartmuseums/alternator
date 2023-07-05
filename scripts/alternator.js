// @license This script is designed to help archival institutions (such as museums) collect alt text from enthusiastic users. https://github.com/harvardartmuseums/alternator


// this code will be executed after page load
(function() {
  const config = { 
    url: document.querySelector("meta[name='alternator-url']").getAttribute("content"),
    contact: document.querySelector("meta[name='alternator-contact']").getAttribute("content"),
    id: document.querySelector("meta[name='alternator-id']").getAttribute("content"),
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
      action = `https://script.google.com/macros/s/${config.path}/exec`
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
        scrollDetect('stop');
        return;
      }

      // Otherwise, show it
      show(elem);
      scrollDetect();

    };

  // styling for button depending on if target container is defined
  const container = config.container ? document.getElementById(config.container): document.body;
  const position = config.container ? "position:absolute; left: 50%; transform: translateX(-50%); top: -32px;" : "position:fixed; bottom: 0; right: 20px;" ;
  if(config.container){
    container.style.position = 'relative';
  }

  const button = `<button role="button" style="transition: all .3s; ${position} z-index: 500; font-size:16px; background-color: #c43422; border: 1px solid #c43422; color: white; padding: 3px 10px; text-decoration: none;
  cursor: pointer;" onMouseOver="this.style.backgroundColor='#30892d',this.style.border='1px solid #30892d'" onMouseOut="this.style.color='#fff',this.style.backgroundColor='#c43422',this.style.border='1px solid #c43422'" id="alternator-toggle">+ ALT</button>`;

  const template = 
  `<div style="transition: all .5s ease-in-out; position: fixed; z-index:600; left: 0; bottom: 0; width: 100%; background-color: #d4d4d7; text-align: center; font-family: arial; display:none;" class="place-content-center" id="alternator-form" >
  <div style="width: 90%; margin: 0 auto; display:block; overflow:hidden;">
  <button onclick="dismiss(this);" id="alternator-close" style="background-color: black; border: none; color: white; padding: 12px 32px; text-decoration: none; cursor: pointer; display:table; float:right; margin: 20px 0 20px 20px; font-size:16px;">close</button>
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

  container.insertAdjacentHTML('afterbegin', button);
  const toggleButton = document.getElementById('alternator-toggle');
  
  const page = document.body;
  page.insertAdjacentHTML('afterend', template);
  const form = document.getElementById('alternator-form');

  toggleButton.addEventListener('click', function (event) {
    toggle(form)
  });

  function scrollDetect(x){
    var lastScroll = 0;
    var direction = "up";
    var newDirection = "up";
    let height = form.offsetHeight;

    const close = document.getElementById('alternator-close');
    close.addEventListener('click', function (event) {
      toggle(form)
    });

    window.onscroll = function() {
        if (x === "stop"){
          return;
        }else{
          let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
          if (currentScroll > 0 && lastScroll <= currentScroll){
            lastScroll = currentScroll;
            newDirection ="down";
            if (direction != newDirection){
              direction = newDirection;
              form.style.bottom = 85-height+"px";
            }
          }else{
            lastScroll = currentScroll;
            newDirection ="up";
            if (direction != newDirection){
              direction = newDirection;
              form.style.bottom = "0";
            }
          }
        }
    };
  }
  

})();
