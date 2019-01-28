(function() {
  let blocks = document.querySelectorAll(".grid__block");
  for (block of blocks) {
    block.addEventListener(
      "click",
      function() {
        this.classList.toggle("unlocked");
      },
      true
    );
  }
})();
