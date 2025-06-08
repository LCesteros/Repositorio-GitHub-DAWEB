const formulario = document.getElementById('formulario');
const saludo = document.getElementById('saludo');
const campos = {
  nombre: {
    el: document.getElementById('nombre'),
    validar: val => val.length > 6 && val.includes(' '),
    error: 'Debe tener más de 6 letras y al menos un espacio.'
  },
  email: {
    el: document.getElementById('email'),
    validar: val => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val),
    error: 'Debe tener un formato de email válido.'
  },
  password: {
    el: document.getElementById('password'),
    validar: val => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(val),
    error: 'Debe tener al menos 8 caracteres con letras y números.'
  },
  password2: {
    el: document.getElementById('password2'),
    validar: val => val === campos.password.el.value,
    error: 'Las contraseñas no coinciden.'
  },
  edad: {
    el: document.getElementById('edad'),
    validar: val => Number(val) >= 18,
    error: 'Debe ser mayor o igual a 18.'
  },
  telefono: {
    el: document.getElementById('telefono'),
    validar: val => /^\d{7,}$/.test(val),
    error: 'Al menos 7 dígitos, sin espacios ni símbolos.'
  },
  direccion: {
    el: document.getElementById('direccion'),
    validar: val => val.length >= 5 && /\s/.test(val),
    error: 'Debe tener letras, números y un espacio.'
  },
  ciudad: {
    el: document.getElementById('ciudad'),
    validar: val => val.length >= 3,
    error: 'Al menos 3 caracteres.'
  },
  cp: {
    el: document.getElementById('cp'),
    validar: val => val.length >= 3,
    error: 'Al menos 3 caracteres.'
  },
  dni: {
    el: document.getElementById('dni'),
    validar: val => /^\d{7,8}$/.test(val),
    error: 'Debe tener 7 u 8 dígitos.'
  }
};


Object.values(campos).forEach(({ el, validar, error }) => {
  const small = el.nextElementSibling;

  el.addEventListener('blur', () => {
    if (!validar(el.value.trim())) {
      small.textContent = error;
    }
  });

  el.addEventListener('focus', () => {
    small.textContent = '';
  });
});


campos.nombre.el.addEventListener('keydown', () => {
  saludo.textContent = 'HOLA ' + campos.nombre.el.value;
});
campos.nombre.el.addEventListener('focus', () => {
  saludo.textContent = 'HOLA ' + campos.nombre.el.value;
});


formulario.addEventListener('submit', e => {
  e.preventDefault();
  let errores = [];

  Object.entries(campos).forEach(([key, { el, validar, error }]) => {
    const value = el.value.trim();
    if (!validar(value)) {
      errores.push(`${key}: ${error}`);
      el.nextElementSibling.textContent = error;
    }
  });

  if (errores.length === 0) {
    const datos = Object.values(campos)
      .map(({ el }) => `${el.previousElementSibling.textContent}: ${el.value.trim()}`)
      .join('\n');
    alert('Formulario enviado con éxito:\n\n' + datos);
  } else {
    alert('Errores en el formulario:\n\n' + errores.join('\n'));
  }
});
