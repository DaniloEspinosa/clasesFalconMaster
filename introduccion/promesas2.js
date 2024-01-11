const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["post 1", "post 2", "post 3"];
      const error = true;

      if (error) {
        reject("Hubo un error al intentar obtener los posts.");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log(error);
  });
