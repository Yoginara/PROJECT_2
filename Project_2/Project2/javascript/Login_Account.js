function submitForm(event) {
  event.preventDefault(); // Menghentikan pengiriman form
  const form = event.target;

  if (form.checkValidity() === false) {
    event.stopPropagation();
    form.classList.add('was-validated');
    return; // Menghentikan fungsi jika form tidak valid
  }

  // Lakukan operasi lain di sini (validasi, pengolahan data, dll)

  // Arahkan ke halaman lain
  window.location.href = 'Order_Tickets.html';
}
