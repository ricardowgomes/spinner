const spiningSlash = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   '];

const spinner = (arr, delay) => {
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

spinner(spiningSlash, 300);