(function() {
  let blocks = document.querySelectorAll(".grid__block");
  let tilemap = {};
  tilemap.array = Array(9)
    .fill(0)
    .map(() => Array(12).fill(0));

  tilemap.assignTiles = function(blocks) {
    for ([index, block] of blocks.entries()) {
      // console.log(parseInt(index / 12));
      // console.log(parseInt(index % 12));
      // console.log("----" + index + "----");
      if (this.array[parseInt(index / 12)][parseInt(index % 12)] == 1)
        block.classList.toggle("unlocked");
    }
  };
  // console.dir(tilemap);

  if (localStorage.tilemap) {
    // const array2DMap =
    // const arrayMap = stringMap.split(",");
    // console.log(stringMap.length);
    // console.log(stringMap);
    // arrayMap.reduce(function(prev, curr, index, arr) {
    //   console.log(prev + " " + curr + " " + index);
    //   if (prev == 11) {
    //     array2DMap.push(arr.slice(index, index + 12));
    //     console.dir(array2DMap);
    //     return 0;
    //   } else {
    //     return ++prev;
    //   }
    // }, 0);

    tilemap.array = JSON.parse(localStorage.getItem("tilemap"));
    tilemap.assignTiles(blocks);
  }

  for (block of blocks) {
    block.addEventListener(
      "click",
      e => {
        e.target.classList.toggle("unlocked");
        const x = e.target.offsetLeft / 64,
          y = e.target.offsetTop / 64;
        if (tilemap.array[y][x] == 0) tilemap.array[y][x] = 1;
        else tilemap.array[y][x] = 0;
        localStorage.setItem("tilemap", JSON.stringify(tilemap.array));
      },
      true
    );
  }
})();
