//Mendapatkan Element DOM
const btnLuas = document.getElementById("btnLuas");
const btnKeliling = document.getElementById("btnKeliling");
const hitungBtn = document.getElementById("hitungBtn");
const resetBtn = document.getElementById("resetBtn");
const alasInput = document.getElementById("alas");
const tinggiInput = document.getElementById("tinggi");
const displayKeliling = document.getElementById("contain-submit-keliling");
const theAnswer = document.getElementById("theAnswer");
const hitungKelilingBtn = document.getElementById("hitungKelilingBtn");
const sisi1Input = document.getElementById("sisi1");
const sisi2Input = document.getElementById("sisi2");
const sisi3Input = document.getElementById("sisi3");

// Variable untuk Menentukan Pilihan mana yang dipilih
let isLuasSelected = true;

btnLuas.addEventListener("click", function () {
  isLuasSelected = true;
  document.getElementById("desc-luas-segitiga").style.display = "flex";
  document.getElementById("desc-keliling-segitiga").style.display = "none";
  document.getElementById("contain-submit-luas").style.display = "flex";
  document.getElementById("contain-submit-keliling").style.display = "none";
});

btnKeliling.addEventListener("click", function () {
  isLuasSelected = false;
  document.getElementById("desc-luas-segitiga").style.display = "none";
  document.getElementById("desc-keliling-segitiga").style.display = "flex";
  document.getElementById("contain-submit-luas").style.display = "none";
  document.getElementById("contain-submit-keliling").style.display = "flex";
});

// Untuk menghitung Luas
hitungBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const alas = parseFloat(alasInput.value);
  const tinggi = parseFloat(tinggiInput.value);

  if (isNaN(alas) || isNaN(tinggi)) {
    theAnswer.textContent = "Masukkan nilai yang valid.";
    return;
  }

  let result;
  if (isLuasSelected) {
    result = 0.5 * alas * tinggi; // Formula for Luas Segitiga
    theAnswer.textContent = `L = 1/2 x ${alas} x ${tinggi} = ${result}`;
  }
});

// Untuk Hitung Keliling
hitungKelilingBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const s1 = parseFloat(sisi1Input.value);
  const s2 = parseFloat(sisi2Input.value);
  const s3 = parseFloat(sisi3Input.value);

  if (isNaN(s1) || isNaN(s2) || isNaN(s3)) {
    theAnswer.textContent = "Masukkan nilai yang valid.";
    return;
  }

  const result = s1 + s2 + s3; // Rumus keliling segitiga
  theAnswer.textContent = `Keliling Segitiga: ${result}`;
});

// Untuk Reset
resetBtn.addEventListener("click", function (event) {
  event.preventDefault();
  alasInput.value = "";
  tinggiInput.value = "";
  document.getElementById("sisi3").value = "";
  theAnswer.textContent = "";
});
