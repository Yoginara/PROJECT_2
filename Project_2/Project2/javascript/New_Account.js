function submitForm(event) {
  event.preventDefault();
  const form = event.target;

  if (form.checkValidity() === false) {
    event.stopPropagation();
    form.classList.add('was-validated');
  }

  // Lakukan validasi lain di sini (misalnya, cocokkan kedua password)
  const password1 = document.getElementById('exampleInputPassword1').value;
  const password2 = document.getElementById('exampleInputPassword2').value;

  if (password1 !== password2) {
    const confirmPasswordInput = document.getElementById('exampleInputPassword2');
    confirmPasswordInput.setCustomValidity('Passwords do not match.'); // Menambahkan pesan kesalahan kustom
    form.classList.add('was-validated'); // Menampilkan pesan kesalahan
    event.stopPropagation();
    return; // Menghentikan pengiriman form jika password tidak cocok
  } else {
    const confirmPasswordInput = document.getElementById('exampleInputPassword2');
    confirmPasswordInput.setCustomValidity(''); // Menghapus pesan kesalahan jika password cocok
  }

  // Arahkan ke halaman lain jika semuanya valid
  if (form.checkValidity()) {
    window.location.href = 'Login_Account.html';
  }
}
