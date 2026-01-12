// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
});

// Inisialisasi form
function initializeForm() {
    // Tampilkan halaman pertama
    showPage(1);
    
    // Set nilai default untuk testing (opsional)
    setDefaultValues();
}

// Set nilai default untuk testing
function setDefaultValues() {
    // Halaman 1
    document.querySelector('#page-1 input[type="text"]').value = 'WIHARJO';
    document.querySelector('#page-1 input[type="text"]:nth-child(2)').value = '55165';
    document.querySelector('#page-1 input[value="Pria"]').checked = true;
    
    // Halaman 2
    document.querySelector('#page-2 select').value = 'Kantor Pusat';
    document.querySelectorAll('#page-2 select')[1].value = 'Supervisor Perawatan Perbaikan UPT Resor';
}

// Mengatur event listener
function setupEventListeners() {
    // Navigation buttons
    document.getElementById('next-to-page2').addEventListener('click', function() {
        if (validatePage(1)) {
            showPage(2);
        }
    });
    
    document.getElementById('back-to-page1').addEventListener('click', function() {
        showPage(1);
    });
    
    document.getElementById('next-to-page3').addEventListener('click', function() {
        if (validatePage(2)) {
            showPage(3);
        }
    });
    
    document.getElementById('back-to-page2').addEventListener('click', function() {
        showPage(2);
    });
    
    // Clear buttons
    document.querySelectorAll('.btn-clear').forEach(button => {
        button.addEventListener('click', function() {
            const currentPage = getCurrentPage();
            clearPage(currentPage);
        });
    });
    
    // Form submission
    document.getElementById('evaluation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validatePage(3)) {
            submitForm();
        }
    });
    
    // New form button
    document.getElementById('new-form-btn').addEventListener('click', function() {
        resetForm();
    });
    
    // Tambahkan event listener untuk radio buttons di tabel
    document.querySelectorAll('.radio-table input').forEach(radio => {
        radio.addEventListener('change', function() {
            highlightTableRow(this);
        });
    });
}

// Fungsi untuk menampilkan halaman tertentu
function showPage(pageNumber) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.form-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang diminta
    document.getElementById(`page-${pageNumber}`).classList.add('active');
    
    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk mendapatkan halaman saat ini
function getCurrentPage() {
    const activePage = document.querySelector('.form-page.active');
    return parseInt(activePage.id.split('-')[1]);
}

// Fungsi untuk validasi halaman
function validatePage(pageNumber) {
    let isValid = true;
    let firstInvalidField = null;
    
    if (pageNumber === 1) {
        // Validasi halaman 1
        const inputs = document.querySelectorAll('#page-1 input[required]');
        inputs.forEach(input => {
            if (input.type === 'text' && !input.value.trim()) {
                markInvalid(input);
                isValid = false;
                if (!firstInvalidField) firstInvalidField = input;
            } else if (input.type === 'radio') {
                // Untuk radio buttons, cek apakah ada yang dipilih
                const radioGroup = document.querySelectorAll(`input[name="${input.name}"]`);
                const isChecked = Array.from(radioGroup).some(radio => radio.checked);
                if (!isChecked) {
                    // Tandai semua radio dalam grup sebagai invalid
                    radioGroup.forEach(radio => {
                        radio.parentElement.classList.add('invalid');
                    });
                    isValid = false;
                } else {
                    radioGroup.forEach(radio => {
                        radio.parentElement.classList.remove('invalid');
                    });
                }
            } else {
                markValid(input);
            }
        });
    } else if (pageNumber === 2) {
        // Validasi halaman 2
        const selects = document.querySelectorAll('#page-2 select[required]');
        selects.forEach(select => {
            if (!select.value) {
                markInvalid(select);
                isValid = false;
                if (!firstInvalidField) firstInvalidField = select;
            } else {
                markValid(select);
            }
        });
        
        // Validasi minimal satu item penilaian diisi
        const assessmentItems = document.querySelectorAll('#page-2 input[type="radio"]:checked');
        if (assessmentItems.length === 0) {
            alert('Harap isi minimal satu item penilaian ITCS-MS.');
            isValid = false;
        }
    } else if (pageNumber === 3) {
        // Validasi halaman 3
        // Cek apakah ada penilaian yang diisi
        const assessmentItems = document.querySelectorAll('#page-3 input[type="radio"]:checked');
        if (assessmentItems.length === 0) {
            alert('Harap isi minimal satu item penilaian lanjutan ITCS-MS.');
            isValid = false;
        }
    }
    
    // Focus ke field pertama yang invalid
    if (firstInvalidField) {
        firstInvalidField.focus();
    }
    
    return isValid;
}

// Fungsi untuk menandai field sebagai invalid
function markInvalid(field) {
    field.style.borderColor = '#ea4335';
    field.style.boxShadow = '0 0 0 2px rgba(234, 67, 53, 0.2)';
    
    // Tambahkan pesan error jika belum ada
    let errorMessage = field.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.style.color = '#ea4335';
        errorMessage.style.fontSize = '0.9rem';
        errorMessage.style.marginTop = '5px';
        errorMessage.textContent = 'Field ini wajib diisi';
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
}

// Fungsi untuk menandai field sebagai valid
function markValid(field) {
    field.style.borderColor = '#34a853';
    field.style.boxShadow = '0 0 0 2px rgba(52, 168, 83, 0.2)';
    
    // Hapus pesan error jika ada
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.remove();
    }
    
    // Reset ke border default setelah beberapa detik
    setTimeout(() => {
        field.style.borderColor = '';
        field.style.boxShadow = '';
    }, 2000);
}

// Fungsi untuk mengosongkan halaman
function clearPage(pageNumber) {
    if (pageNumber === 1) {
        const inputs = document.querySelectorAll('#page-1 input');
        inputs.forEach(input => {
            if (input.type === 'text') {
                input.value = '';
            } else if (input.type === 'radio') {
                input.checked = false;
                input.parentElement.classList.remove('invalid');
            }
            
            // Reset validasi styling
            input.style.borderColor = '';
            input.style.boxShadow = '';
            const errorMessage = input.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        });
    } else if (pageNumber === 2) {
        // Clear selects
        document.querySelectorAll('#page-2 select').forEach(select => {
            select.value = '';
            select.style.borderColor = '';
            select.style.boxShadow = '';
            
            const errorMessage = select.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains('error-message')) {
                errorMessage.remove();
            }
        });
        
        // Clear radio buttons
        document.querySelectorAll('#page-2 input[type="radio"]').forEach(radio => {
            radio.checked = false;
            radio.parentElement.classList.remove('selected');
        });
    } else if (pageNumber === 3) {
        // Clear radio buttons
        document.querySelectorAll('#page-3 input[type="radio"]').forEach(radio => {
            radio.checked = false;
            radio.parentElement.classList.remove('selected');
        });
        
        // Clear textarea
        const textarea = document.querySelector('#page-3 textarea');
        if (textarea) {
            textarea.value = '';
            textarea.style.borderColor = '';
            textarea.style.boxShadow = '';
        }
    }
    
    alert('Form telah dibersihkan.');
}

// Fungsi untuk highlight baris tabel saat radio dipilih
function highlightTableRow(radio) {
    const row = radio.closest('.table-row');
    
    // Hapus highlight dari semua baris
    document.querySelectorAll('.table-row').forEach(r => {
        r.style.backgroundColor = '';
    });
    
    // Highlight baris yang dipilih
    if (radio.checked) {
        row.style.backgroundColor = '#e8f0fe';
    }
}

// Fungsi untuk mengirim form
function submitForm() {
    // Kumpulkan data dari form
    const formData = collectFormData();
    
    // Hitung hasil penilaian
    const assessmentResults = calculateAssessmentResults();
    
    // Simpan data ke localStorage (untuk simulasi)
    saveDataToStorage(formData, assessmentResults);
    
    // Tampilkan pesan terima kasih
    showThankYouMessage();
}

// Fungsi untuk mengumpulkan data dari form
function collectFormData() {
    const data = {
        // Data pribadi
        nama: document.querySelector('#page-1 input[type="text"]').value,
        nipp: document.querySelector('#page-1 input[type="text"]:nth-child(2)').value,
        jenisKelamin: document.querySelector('#page-1 input[name="gender"]:checked')?.value,
        
        // Data jabatan
        kedudukan: document.querySelector('#page-2 select').value,
        jabatan: document.querySelectorAll('#page-2 select')[1].value,
        
        // Komentar
        komentar: document.querySelector('#page-3 textarea')?.value,
        
        // Timestamp
        timestamp: new Date().toISOString()
    };
    
    return data;
}

// Fungsi untuk menghitung hasil penilaian
function calculateAssessmentResults() {
    const results = {
        totalItems: 0,
        itemsAnswered: 0,
        totalScore: 0,
        averageScore: 0,
        scoresByItem: {}
    };
    
    // Hitung semua item penilaian dari semua halaman
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        if (radio.name.startsWith('itcs-')) {
            results.totalItems++;
            results.itemsAnswered++;
            
            const score = parseInt(radio.value);
            results.totalScore += score;
            
            // Simpan skor per item
            results.scoresByItem[radio.name] = score;
        }
    });
    
    // Hitung rata-rata
    if (results.itemsAnswered > 0) {
        results.averageScore = (results.totalScore / results.itemsAnswered).toFixed(2);
    }
    
    // Hitung persentase
    results.percentage = results.itemsAnswered > 0 ? 
        ((results.totalScore / (results.itemsAnswered * 5)) * 100).toFixed(2) : 0;
    
    // Tentukan kategori
    const avgScore = parseFloat(results.averageScore);
    if (avgScore >= 4.5) {
        results.category = 'Sangat Baik';
        results.categoryColor = '#34a853';
    } else if (avgScore >= 3.5) {
        results.category = 'Baik';
        results.categoryColor = '#4285f4';
    } else if (avgScore >= 2.5) {
        results.category = 'Cukup';
        results.categoryColor = '#fbbc05';
    } else if (avgScore >= 1.5) {
        results.category = 'Kurang';
        results.categoryColor = '#ea4335';
    } else {
        results.category = 'Sangat Kurang';
        results.categoryColor = '#d93025';
    }
    
    return results;
}

// Fungsi untuk menyimpan data ke localStorage
function saveDataToStorage(formData, assessmentResults) {
    const submission = {
        formData: formData,
        assessmentResults: assessmentResults
    };
    
    // Ambil data yang sudah ada
    let allSubmissions = JSON.parse(localStorage.getItem('evaluations')) || [];
    
    // Tambahkan data baru
    allSubmissions.push(submission);
    
    // Simpan kembali ke localStorage
    localStorage.setItem('evaluations', JSON.stringify(allSubmissions));
    
    console.log('Data tersimpan:', submission);
}

// Fungsi untuk menampilkan pesan terima kasih
function showThankYouMessage() {
    // Sembunyikan form
    document.querySelector('form').style.display = 'none';
    
    // Tampilkan pesan terima kasih
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk mereset form
function resetForm() {
    // Reset semua input form
    document.getElementById('evaluation-form').reset();
    
    // Reset radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
        radio.parentElement.classList.remove('selected');
    });
    
    // Reset highlight baris tabel
    document.querySelectorAll('.table-row').forEach(row => {
        row.style.backgroundColor = '';
    });
    
    // Tampilkan halaman 1 lagi
    showPage(1);
    
    // Tampilkan form, sembunyikan pesan terima kasih
    document.querySelector('form').style.display = 'block';
    document.getElementById('thank-you-message').style.display = 'none';
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
