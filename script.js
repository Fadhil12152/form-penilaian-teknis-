// Variabel global untuk menyimpan data
let formData = {
    nama: '',
    nipp: '',
    gender: '',
    kedudukan: '',
    jabatan: '',
    penilaian: {},
    komentar: ''
};

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Set nilai default untuk testing (opsional, bisa dihapus)
    // document.getElementById('nama').value = 'WIHARJO';
    // document.getElementById('nipp').value = '55165';
});

// Fungsi untuk navigasi ke halaman berikutnya
function nextPage(currentPage, nextPage) {
    if (validatePage(currentPage)) {
        showPage(nextPage);
        updateProgress(currentPage, nextPage);
    }
}

// Fungsi untuk kembali ke halaman sebelumnya
function prevPage(currentPage, prevPage) {
    showPage(prevPage);
    updateProgress(currentPage, prevPage);
}

// Fungsi untuk menampilkan halaman tertentu
function showPage(pageNumber) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.form-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang diminta
    document.getElementById('page' + pageNumber).classList.add('active');
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}

// Fungsi untuk update progress bar
function updateProgress(fromPage, toPage) {
    document.getElementById('step' + fromPage).classList.remove('active');
    document.getElementById('step' + toPage).classList.add('active');
}

// Fungsi untuk validasi halaman
function validatePage(pageNumber) {
    let isValid = true;
    
    if (pageNumber === 1) {
        // Validasi halaman 1
        const nama = document.getElementById('nama').value.trim();
        const nipp = document.getElementById('nipp').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        
        // Validasi nama
        if (nama === '') {
            document.getElementById('errorNama').textContent = 'Nama wajib diisi';
            isValid = false;
        } else {
            document.getElementById('errorNama').textContent = '';
        }
        
        // Validasi NIPP
        if (nipp === '') {
            document.getElementById('errorNipp').textContent = 'NIPP wajib diisi';
            isValid = false;
        } else {
            document.getElementById('errorNipp').textContent = '';
        }
        
        // Validasi gender
        if (!gender) {
            document.getElementById('errorGender').textContent = 'Jenis kelamin wajib dipilih';
            isValid = false;
        } else {
            document.getElementById('errorGender').textContent = '';
        }
        
        // Simpan data
        if (isValid) {
            formData.nama = nama;
            formData.nipp = nipp;
            formData.gender = gender.value;
        }
        
    } else if (pageNumber === 2) {
        // Validasi halaman 2
        const kedudukan = document.getElementById('kedudukan').value;
        const jabatan = document.getElementById('jabatan').value;
        
        // Validasi kedudukan
        if (kedudukan === '') {
            document.getElementById('errorKedudukan').textContent = 'Kedudukan wajib dipilih';
            isValid = false;
        } else {
            document.getElementById('errorKedudukan').textContent = '';
        }
        
        // Validasi jabatan
        if (jabatan === '') {
            document.getElementById('errorJabatan').textContent = 'Jabatan wajib dipilih';
            isValid = false;
        } else {
            document.getElementById('errorJabatan').textContent = '';
        }
        
        // Simpan data
        if (isValid) {
            formData.kedudukan = kedudukan;
            formData.jabatan = jabatan;
            
            // Simpan penilaian dari halaman 2
            for (let i = 1; i <= 8; i++) {
                const radio = document.querySelector(`input[name="itcs${i}"]:checked`);
                if (radio) {
                    formData.penilaian[`itcs${i}`] = parseInt(radio.value);
                }
            }
        }
    }
    
    return isValid;
}

// Fungsi untuk membersihkan halaman
function clearPage(pageNumber) {
    if (pageNumber === 1) {
        // Clear halaman 1
        document.getElementById('nama').value = '';
        document.getElementById('nipp').value = '';
        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.checked = false;
        });
        document.getElementById('errorNama').textContent = '';
        document.getElementById('errorNipp').textContent = '';
        document.getElementById('errorGender').textContent = '';
    } else if (pageNumber === 2) {
        // Clear halaman 2
        document.getElementById('kedudukan').value = '';
        document.getElementById('jabatan').value = '';
        for (let i = 1; i <= 8; i++) {
            document.querySelectorAll(`input[name="itcs${i}"]`).forEach(radio => {
                radio.checked = false;
            });
        }
        document.getElementById('errorKedudukan').textContent = '';
        document.getElementById('errorJabatan').textContent = '';
    } else if (pageNumber === 3) {
        // Clear halaman 3
        for (let i = 25; i <= 29; i++) {
            document.querySelectorAll(`input[name="itcs${i}"]`).forEach(radio => {
                radio.checked = false;
            });
        }
        document.getElementById('komentar').value = '';
    }
    
    alert('Form pada halaman ini telah dibersihkan.');
}

// Fungsi untuk submit form
function submitForm() {
    // Kumpulkan data dari halaman 3
    for (let i = 25; i <= 29; i++) {
        const radio = document.querySelector(`input[name="itcs${i}"]:checked`);
        if (radio) {
            formData.penilaian[`itcs${i}`] = parseInt(radio.value);
        }
    }
    
    // Simpan komentar
    formData.komentar = document.getElementById('komentar').value;
    
    // Hitung hasil
    calculateResults();
    
    // Tampilkan hasil
    showResults();
}

// Fungsi untuk menghitung hasil
function calculateResults() {
    const nilaiArray = Object.values(formData.penilaian);
    const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    const rataRata = nilaiArray.length > 0 ? (total / nilaiArray.length).toFixed(2) : 0;
    
    // Update ringkasan
    document.getElementById('summaryNama').textContent = formData.nama;
    document.getElementById('summaryNipp').textContent = formData.nipp;
    document.getElementById('summaryJabatan').textContent = formData.jabatan;
    document.getElementById('summaryKedudukan').textContent = formData.kedudukan;
    document.getElementById('summaryTotal').textContent = nilaiArray.length;
    document.getElementById('summaryAverage').textContent = rataRata;
    
    // Simpan ke localStorage
    saveToLocalStorage();
}

// Fungsi untuk menyimpan data ke localStorage
function saveToLocalStorage() {
    // Ambil data yang sudah ada
    let semuaData = JSON.parse(localStorage.getItem('penilaianPegawai')) || [];
    
    // Tambahkan data baru
    const dataBaru = {
        ...formData,
        tanggal: new Date().toLocaleString(),
        id: Date.now()
    };
    
    semuaData.push(dataBaru);
    
    // Simpan kembali
    localStorage.setItem('penilaianPegawai', JSON.stringify(semuaData));
    
    console.log('Data tersimpan:', dataBaru);
}

// Fungsi untuk menampilkan hasil
function showResults() {
    // Sembunyikan form
    document.getElementById('penilaianForm').style.display = 'none';
    
    // Sembunyikan progress steps
    document.querySelector('.progress-steps').style.display = 'none';
    
    // Tampilkan hasil
    document.getElementById('results').classList.remove('hidden');
}

// Fungsi untuk membuat form baru
function newForm() {
    // Reset form data
    formData = {
        nama: '',
        nipp: '',
        gender: '',
        kedudukan: '',
        jabatan: '',
        penilaian: {},
        komentar: ''
    };
    
    // Reset semua input
    document.getElementById('penilaianForm').reset();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
    });
    
    // Reset progress steps
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index === 0) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Tampilkan form dan progress steps
    document.getElementById('penilaianForm').style.display = 'block';
    document.querySelector('.progress-steps').style.display = 'flex';
    
    // Sembunyikan hasil
    document.getElementById('results').classList.add('hidden');
    
    // Tampilkan halaman 1
    showPage(1);
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}
