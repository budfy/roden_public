function contactsForm() {
  const form = document.querySelector('.contacts__form');
  form.addEventListener("submit", submitForm)

  function submitForm(event) {
    // Зупиняємо перезавантаження сторінки під час відправки форми
    event.preventDefault();

    // Отримуємо дані з форми
    const form = event.target;
    const formData = collectFormData(form);
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

  function collectFormData(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let data = new Object();
    inputs.forEach(async el => {
      if (el.value !== "") {
        if (el.type !== "file") {
          data[el.name] = el.value;
        } else {
          data["file"] = await getBase64(el.files[0]);
        }
      }
    });
    console.dir(data);
    return data;
  }

  const getBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

contactsForm();