document.forms['ramenForm'].addEventListener('submit', (event) => {
  event.preventDefault();

  const url = new URL('https://front-br-challenges.web.app/api/v1/ramen-go/');
  const params = {
    broth: document.querySelector('input[name=broth]:checked').value,
    meat: document.querySelector('input[name=meat]:checked').value,
  };

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      document.getElementById('header').remove();
      document.getElementById('main').remove();

      document.getElementById('result').classList.remove('result');

      let img = document.createElement('img');
      img.src = data.data.image;
      img.alt = data.data.name;

      document.getElementById('response-image-order').appendChild(img);

      let span = document.createElement('span');
      span.innerHTML = `${data.data.name}`;

      document.getElementById('response-name-order-order').appendChild(span);
    })
    .catch((error) => {
      console.log(error);
    });
});
