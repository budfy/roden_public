function contactsForm() {
  const form = document.querySelector('.contacts__form');
  form.addEventListener("submit", submitForm)

  function submitForm(event) {
    // Зупиняємо перезавантаження сторінки під час відправки форми
    event.preventDefault();

    // Отримуємо дані з форми
    const form = event.target;
    const formData = new FormData(form);
    let timestamp = new Date();
    formData.append('Дата', timestamp.toLocaleString("UA-uk"));
    formData.append('file', form.querySelector('input[type=file]').files[0])
    // Відправляємо POST-запит за допомогою Axios
    axios.post('./send.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        // Обробляємо відповідь сервера
        if (!response.data.ok) {
          console.warn(response);
          console.table(response.data);
        }
        // console.log(response);
        return true;
      })
      .catch(error => {
        // Обробляємо помилки відправки запиту
        console.error(error);
      });
  }
}

contactsForm();