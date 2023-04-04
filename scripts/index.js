class FormSubmitter {
  constructor(form) {
    this.form = form;
  }

  async submit() {
    const url = this.form.action;
    const formData = new FormData(this.form);
    try {
      const response = await fetch('https://formcarry.com/s/n1svXQBAW-', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}

const form = document.querySelector('.my_form');
const submitter = new FormSubmitter(form);

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const result = await submitter.submit();
    console.log(result);
  } catch (error) {
    console.error('Ошибка:', error);
  }
});