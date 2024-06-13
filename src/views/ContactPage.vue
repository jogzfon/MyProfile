<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm" class="contact-form" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model.trim="form.name"
          placeholder="Enter your name"
          :class="{ 'is-invalid': nameError }"
          @blur="validateName"
          @input="handleInput"
          required
        />
        <div v-if="nameError" class="invalid-feedback">{{ nameError }}</div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="form.email"
          placeholder="Enter your email"
          :class="{ 'is-invalid': emailError }"
          @blur="validateEmail"
          @input="handleInput"
          required
        />
        <div v-if="emailError" class="invalid-feedback">{{ emailError }}</div>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model.trim="form.message"
          rows="5"
          placeholder="Type your message here"
          :class="{ 'is-invalid': messageError }"
          @blur="validateMessage"
          @input="handleInput"
          required
        ></textarea>
        <div v-if="messageError" class="invalid-feedback">{{ messageError }}</div>
      </div>
      <button type="submit" :disabled="isFormInvalid">Send Message</button>
      <div v-if="formSubmitted" class="success-message">
        Your message has been sent successfully!
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue';
import emailjs from '@emailjs/browser';

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      message: ''
    });

    const nameError = ref('');
    const emailError = ref('');
    const messageError = ref('');
    const formSubmitted = ref(false);

    const isFormInvalid = computed(() => {
      if(nameError.value =='' && emailError.value =='' && messageError.value =='' && form.name != '' && form.email != '', form.message != ''){
        return false;
      }else{
        return true;
      }
    });

    const validateName = () => {
      if (!form.name) {
        nameError.value = 'Name is required';
      } else if (form.name.length < 3) {
        nameError.value = 'Name must have at least 3 characters';
      } else {
        nameError.value = '';
      }
    };

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email) {
        emailError.value = 'Email is required';
      } else if (!emailPattern.test(form.email)) {
        emailError.value = 'Invalid email format';
      } else {
        emailError.value = '';
      }
    };

    const validateMessage = () => {
      if (!form.message) {
        messageError.value = 'Message is required';
      } else if (form.message.length < 10) {
        messageError.value = 'Message must have at least 10 characters';
      } else {
        messageError.value = '';
      }
    };
    const handleInput = () => {
      formSubmitted.value = false; // Reset the formSubmitted flag when user starts typing again
    };

    const submitForm = () => {
      validateName();
      validateEmail();
      validateMessage();

      if (!isFormInvalid.value) {
        console.log('Passed');
        const serviceId = 'service_9kq9au8';
        const templateId = 'template_1500uhd';
        const userId = 'z-wpr7HSUdhbG0qyM';

        const templateParams = {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        };

        emailjs
          .send(serviceId, templateId, templateParams, userId)
          .then(() => {
            console.log('Email sent successfully');
            formSubmitted.value = true;
            clearForm();
          })
          .catch((error: Error) => {
            console.error('Error sending email:', error);
          });
      }
    };

    const clearForm = () => {
      form.name = '';
      form.email = '';
      form.message = '';
      nameError.value = '';
      emailError.value = '';
      messageError.value = '';
    };

    return {
      form,
      nameError,
      emailError,
      messageError,
      formSubmitted,
      isFormInvalid,
      validateName,
      validateEmail,
      validateMessage,
      handleInput,
      submitForm
    };
  }
});
</script>


<style scoped>
.contact {
  text-align: center;
  background-color: #007bff;
  border-radius: 10px;
  color: white;
  padding: 20px;
  margin: auto;
  min-height: 600px;
}

.contact-form {
  max-width: 500px;
  margin: auto;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical; /* Allow vertical resizing of textarea */
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 14px;
  margin-top: 4px;
}

button[type="submit"] {
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #32a672;
}

button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success-message {
  color: #28a745;
  font-weight: bold;
  margin-top: 16px;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .contact-form {
    padding: 15px;
  }
}
</style>