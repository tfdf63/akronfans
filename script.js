// Загрузка JSON файла
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById('jsonContainer');
    container.classList.add('wrapper');

    // Создание элементов div для каждого объекта в массиве данных JSON
    data.forEach((obj) => {
      const item = document.createElement('div');
      item.classList.add('data-item');

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const keyValue = document.createElement('p');
          keyValue.classList.add('item');
          keyValue.textContent = `${obj[key]}`;
          item.appendChild(keyValue);
        }
      }

      container.appendChild(item);
    });
  })
  .catch((error) => console.error('Ошибка загрузки данных:', error));
