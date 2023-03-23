// Function for searching BMI
const calculateBMI = (bodyWeight, bodyHeight) => {
  // 1 centimeter = 0.01 meter
  const bodyHeightInMeter = bodyHeight * 0.01;

  // toFixed to round n number decimal
  return (bodyWeight / (bodyHeightInMeter ** 2)).toFixed(1);
}

// Reset form
const formReset = () => {
  bodyWeight.value = "";
  bodyHeight.value = "";
  age.value = "";

  bmiHeader.innerHTML = "";
  bmiNumber.innerHTML = 0;
  bmiDescription.innerHTML = "";
}

// Calculate BMI
const showResult = () => {
  const indexBMI = calculateBMI(bodyWeight.value, bodyHeight.value);

  // Check BMI
  if (indexBMI < 18.5) {
    bmiHeader.innerText = 'Kekurangan Berat Badan';
    bmiNumber.innerText = indexBMI;
    bmiDescription.innerText = 'Hasil perhitungan menunjukkan berat badan Anda kurang atau tergolong kurus. Hasil ini berdasarkan angka BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda membutuhkan asupan kalori tambahan sebanyak 300-500 kkal per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.'
  } else if (indexBMI < 24.9) {
    bmiHeader.innerText = 'Normal (Ideal)';
    bmiNumber.innerText = indexBMI;
    bmiDescription.innerHTML = 'Hasil perhitungan menunjukkan berat badan Anda normal. Hasil ini berdasarkan angka IMT yang berada direntang antara angka 18.5 sampai 24.9. Memiliki berat badan ideal merupakan salah satu cara untuk menjaga kesehatan tubuh dan resiko penyakit berbahaya.<br>Diantara cara menjaga berat badan ideal adalah dengan mengatur pola makan sehat dan olahraga rutin. Pastikan untuk selalu menyeimbangkan antara energi yang masuk dan energi yang dikeluarkan.'
  } else if (indexBMI < 29.9) {
    bmiHeader.innerText = 'Kelebihan Berat Badan';
    bmiNumber.innerText = indexBMI;
    bmiDescription.innerText = 'Hasil perhitungan menujukkan bahwa Anda sudah memiliki berat badan yang berlebih. Segera rubah pola makan Anda dan jalankan pola hidup sehat dengan rutin belorahga dan mengkonsumsi makanan yang rendah kalori.'
  } else if (indexBMI >= 30) {
    bmiHeader.innerText = 'Kegemukan (Obesitas)';
    bmiNumber.innerText = indexBMI;
    bmiDescription.innerHTML = 'Hasil perhitungan menunjukkan bahwa Anda tergolong obesitas. Hasil ini berdasarkan angka IMT yang lebih dari 30. Yang harus diketahui obesitas memiliki resiko menderita berbagai penyakit serius.<br>Cara menurunkannya dengan mengurangi asupan kalor harian sekitar 300-500 kkal. Cara ini dapat membantu menurunkan berat badan sebesar 0,5-1 kg per minggu. Disamping itu juga perlu untuk melakukan olahraga rutin untuk mendapatkan berat badan ideal. '
  } else {
    bmiNumber.innerText = 0;
  }

  // Reset input text after submitting
  bodyWeight.value = "";
  bodyHeight.value = "";
  age.value = "";
}

// Form values
let bodyWeight = document.getElementById('berat-badan');
let bodyHeight = document.getElementById('tinggi-badan');
let age = document.getElementById('usia');

// Result values
let bmiHeader = document.getElementById('header-bmi');
let bmiNumber = document.getElementById('nilai-bmi');
let bmiDescription = document.getElementById('penjelasan-bmi');

// Button
const submitButton = document.getElementById('hitung-bmi');
const resetButton = document.getElementById('reset-button');

// Button event listeners
resetButton.addEventListener('click', formReset);
submitButton.addEventListener('click', showResult);
