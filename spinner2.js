const spiningSlash = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   '];

const typewriter = (arr, delay) => {
  let char = 0;

  (function animation() {
    process.stdout.write(arr[char]);
    char++;

    if (char < arr.length) {
      setTimeout(animation, delay);

    } else {
      console.log("\n");
    }
  })();
};

typewriter(spiningSlash, 300);