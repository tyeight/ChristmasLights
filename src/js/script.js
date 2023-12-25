function changeLampColors() {
    const lampadas = document.querySelectorAll('.lampada');
    const minInterval = 1000; // Intervalo mínimo
    const maxInterval = 3000; // Intervalo máximo
  
    lampadas.forEach((lampada) => {
      setInterval(() => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        lampada.style.backgroundColor = randomColor;
      }, Math.random() * (maxInterval - minInterval) + minInterval);
    });
  }
changeLampColors();
  