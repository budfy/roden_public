function contactsForm() {
  const form = document.querySelector('.contacts__form');
  form.addEventListener("submit", submitForm)

  function submitForm(event) {
    // Зупиняємо перезавантаження сторінки під час відправки форми
    event.preventDefault();

    // Отримуємо дані з форми
    const form = event.target;
    const formData = new FormData(form);
    // console.log(formData);
    // Відправляємо POST-запит за допомогою Axios
    axios.post('./send.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        // Обробляємо відповідь сервера
        console.log(response);
      })
      .catch(error => {
        // Обробляємо помилки відправки запиту
        console.error(error);
      });
  }
}

contactsForm()