


document.addEventListener('DOMContentLoaded', function() {
    console.log('Platform Pembelajaran ready!');

    // Tombol CTA untuk navigasi ke halaman kursus
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('click', function() {
        window.location.href = 'courses.html';
    });

    // Fungsi login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Simulasi proses login (Anda bisa mengganti dengan validasi dan API request sebenarnya)
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            alert(`Login sukses untuk email: ${email}`);
            // Redirect ke halaman utama setelah login (misalnya)
            window.location.href = 'index.html';
        });
    }

    // Login dengan Facebook
    const facebookLoginButton = document.getElementById('facebook-login');
    if (facebookLoginButton) {
        facebookLoginButton.addEventListener('click', function() {
            // Tambahkan logika login Facebook di sini
            alert('Login dengan Facebook belum diimplementasikan.');
        });
    }

    // Login dengan Google
    const googleLoginButton = document.getElementById('google-login');
    if (googleLoginButton) {
        googleLoginButton.addEventListener('click', function() {
            // Tambahkan logika login Google di sini
            alert('Login dengan Google belum diimplementasikan.');
        });
    }
});

