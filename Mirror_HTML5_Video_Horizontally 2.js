// Javascript to flip HTML5 video horizontally
// Update 12/31/15 Chris Michael
// Toggle:
(function()
{
  var node = document.createElement('style');
  document.body.appendChild(node);
  window.addStyleString = function(str)
  {
    node.innerHTML = str;
  }
    cssText =
     ".xflip { \
      -moz-transform:    scale(-1, 1) !important;\
      -webkit-transform: scale(-1, 1) !important;\
      -o-transform:      scale(-1, 1) !important;\
      transform:         scale(-1, 1) !important;\
      filter: FlipH !important;\
    }";
})();
