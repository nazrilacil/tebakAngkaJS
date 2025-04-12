/*? no js js needed from me */
const inputan = document.getElementById('input');
const hasil = document.getElementById('hasil');

let angkaRandom = Math.floor(Math.random() * 100) + 1;
let testing = 0;

function cekInputan() {
    testing++;
    const inputan_user = parseInt(inputan.value)
    if (inputan_user === angkaRandom) {
        hasil.textContent = `Selamat Anda benar, yaitu angka ${angkaRandom} dan anda menebak ${inputan_user}`
        hasil.style.color = 'green';
        inputan.disabled = true;
        angkaRandom = Math.floor(Math.random() * 100) + 1;
    } else if (inputan_user > angkaRandom) {
        hasil.textContent = `Tebakan anda ${inputan_user} terlalu besar, coba lagi. Jawaban yang benar ${angkaRandom}`
        hasil.style.color = 'red';
        angkaRandom = Math.floor(Math.random() * 100) + 1;
    } else if (inputan_user < angkaRandom) {
        hasil.textContent = `Tebakan anda ${inputan_user} terlalu kecil, coba lagi. Jawaban yang benar ${angkaRandom}`
        hasil.style.color = 'red';
        angkaRandom = Math.floor(Math.random() * 100) + 1;
    }
    inputan.value = '';
    inputan.focus()
}

const container = document.querySelector('.container')
const button = document.querySelector('.btn')
const a = document.querySelector('.container h3 a')
const h1 = document.querySelector('.container h1')
const html = document.querySelector('html')

// style

container.style.width = '100%';
container.style.height = '100vh';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.display = 'flex';
container.style.flexDirection = 'column';

a.style.color = '#0000ff';
a.style.marginBottom = '10px';
h1.style.marginBottom = '10px'
h1.style.fontFamily = 'Arial';

inputan.style.border = '1px solid #0000ff'
inputan.style.width = '30%';
inputan.style.height = '35px';
inputan.style.marginTop = '20px';
inputan.style.textAlign = 'center';
inputan.style.borderRadius = '8px';


button.style.width = '30%';
button.style.height = '40px';
button.style.backgroundColor = '#0000ff';
button.style.color = 'white';
button.style.marginTop = '10px';
button.style.marginBottom = '10px';
button.style.borderRadius = '10px';
button.style.cursor = 'pointer';