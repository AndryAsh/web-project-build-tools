console.log('loadScript');

const arrayLink = [];

/* function loadScript(path, callback) {
  const script = document.createElement('script')

  script.src = path
  script.onload = callback

  document.body.appendChild(script)
} */

function loadScript(path, callback) {

  function addScript(link, callback) {
    const script = document.createElement('script');

    script.src = link;
    script.onload = callback(link);

    document.body.appendChild(script);
  };

  if (Array.isArray(path)) {    // если передан массив ссылок
    path.forEach(link => {
      if (!arrayLink.includes(link)) {
        arrayLink.push(link);
        addScript(link, callback);
      }
    })

  } else {
    addScript(path, callback);
  }

}
