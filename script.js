document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;
    if (ramo.classList.contains('aprobado')) return;

    ramo.classList.add('aprobado');

    const desbloquear = JSON.parse(ramo.dataset.unlock || "[]");
    desbloquear.forEach(id => {
      const siguiente = document.getElementById(id);
      if (siguiente) {
        siguiente.classList.remove('bloqueado');
      }
    });
  });
});
