// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
});

// Inisialisasi form
function initializeForm() {
    // Tampilkan halaman pertama
    showPage(1);
}

// Mengatur event listener
function setupEventListeners() {
    // Navigation buttons - Halaman 1 ke 2
    document.getElementById('next-to-page2').addEventListener('click', function() {
        if (validatePage(1)) {
            showPage(2);
        }
    });
    
    // Navigation buttons - Halaman 2 ke 1
    document.getElementById('back-to-page1').addEventListener('click', function() {
        showPage(1);
    });
    
    // Navigation buttons - Halaman 2 ke 3
    document.getElementById('next-to-page3').addEventListener('click', function() {
        // Di halaman 2, penilaian ITCS-MS tidak wajib diisi semua
        // Cukup validasi field required saja
        if (validatePage(2)) {
            showPage(3);
        }
    });
    
    // Navigation buttons - Halaman 3 ke 2
    document.getElementById('back-to-page2').addEventListener('click', function() {
        showPage(2);
    });
    
    // Clear buttons untuk setiap halaman
    document.getElementById('clear-page1').addEventListener('click', function() {
        clearPage(1);
    });
    
    document.getElementById('clear-page2').addEventListener('click', function() {
        clearPage(2);
    });
    
    document.getElementById('clear-page3').addEventListener('click', function() {
        clearPage(3);
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
    
    // Validasi real-time untuk input text dan select
    setupRealTimeValidation();
}

// Setup real-time validation
function setupRealTimeValidation() {
    // Input text
    document.querySelectorAll('.text-input[required]').forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Select dropdowns
    document.querySelectorAll('.dropdown-input[required]').forEach(select => {
        select.addEventListener('change', function() {
            validateField(this);
        });
    });
    
    // Radio buttons
    document.querySelectorAll('input[type="radio"][required]').forEach(radio => {
        radio.addEventListener('change', function() {
            const radioGroup = document.querySelectorAll(`input[name="${this.name}"]`);
            let isValid = false;
            
            radioGroup.forEach(r => {
                if (r.checked) {
                    isValid = true;
                    markValid(r);
                }
            });
            
            if (!isValid) {
                radioGroup.forEach(r => {
                    markInvalid(r);
                });
            }
        });
    });
}

// Fungsi untuk menampilkan halaman tertentu
function showPage(pageNumber) {
    console.log(`Navigating to page ${pageNumber}`);
    
    // Sembunyikan semua halaman
    document.querySelectorAll('.form-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Tampilkan halaman yang diminta
    document.getElementById(`page-${pageNumber}`).classList.add('active');
    
    // Scroll ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk validasi halaman
function validatePage(pageNumber) {
    console.log(`Validating page ${pageNumber}`);
    let isValid = true;
    let firstInvalidField = null;
    
    if (pageNumber === 1) {
        // Validasi halaman 1
        const namaInput = document.getElementById('nama-lengkap');
        const nippInput = document.getElementById('nipp');
        const genderRadios = document.querySelectorAll('input[name="gender"]');
        
        // Validasi Nama
        if (!namaInput.value.trim()) {
            markInvalid(namaInput);
            isValid = false;
            firstInvalidField = namaInput;
        } else {
            markValid(namaInput);
        }
        
        // Validasi NIPP
        if (!nippInput.value.trim()) {
            markInvalid(nippInput);
            isValid = false;
            if (!firstInvalidField) firstInvalidField = nippInput;
        } else {
            markValid(nippInput);
        }
        
        // Validasi Jenis Kelamin
        const isGenderSelected = Array.from(genderRadios).some(radio => radio.checked);
        if (!isGenderSelected) {
            // Tandai semua radio dalam grup sebagai invalid
            genderRadios.forEach(radio => {
                markInvalid(radio);
            });
            isValid = false;
        } else {
            genderRadios.forEach(radio => {
                markValid(radio);
            });
        }
        
    } else if (pageNumber === 2) {
        // Validasi halaman 2 - HANYA field required (dropdowns)
        const kedudukanSelect = document.getElementById('kedudukan');
        const jabatanSelect = document.getElementById('jabatan');
        
        // Validasi Kedudukan
        if (!kedudukanSelect.value) {
            markInvalid(kedudukanSelect);
            isValid = false;
            firstInvalidField = kedudukanSelect;
        } else {
            markValid(kedudukanSelect);
        }
        
        // Validasi Jabatan
        if (!jabatanSelect.value) {
            markInvalid(jabatanSelect);
            isValid = false;
            if (!firstInvalidField) firstInvalidField = jabatanSelect;
        } else {
            markValid(jabatanSelect);
        }
        
        // Di halaman 2, penilaian ITCS-MS TIDAK wajib diisi semua
        // Jadi tidak perlu validasi radio buttons
        
    } else if (pageNumber === 3) {
        // Validasi halaman 3 - Tidak ada field required
        // Hanya validasi jika mau submit
        
        // Di halaman 3, tidak ada field yang required
        // User bisa submit meskipun tidak mengisi penilaian lanjutan
        console.log('Page 3 validation passed (no required fields)');
    }
    
    // Tampilkan pesan jika ada error
    if (!isValid && firstInvalidField) {
        console.log('Validation failed for field:', firstInvalidField);
        firstInvalidField.focus();
        
        // Tambahkan pesan error di atas form
        showErrorMessage('Harap isi semua field yang wajib diisi.');
    } else if (isValid) {
        // Hapus pesan error jika ada
        hideErrorMessage();
    }
    
    return isValid;
}

// Fungsi untuk validasi field individual
function validateField(field) {
    if (field.type === 'text') {
        if (!field.value.trim()) {
            markInvalid(field);
            return false;
        } else {
            markValid(field);
            return true;
        }
    } else if (field.tagName === 'SELECT') {
        if (!field.value) {
            markInvalid(field);
            return false;
        } else {
            markValid(field);
            return true;
        }
    } else if (field.type === 'radio') {
        const radioGroup = document.querySelectorAll(`input[name="${field.name}"]`);
        const isChecked = Array.from(radioGroup).some(radio => radio.checked);
        
        if (!isChecked) {
            radioGroup.forEach(radio => markInvalid(radio));
            return false;
        } else {
            radioGroup.forEach(radio => markValid(radio));
            return true;
        }
    }
    
    return true;
}

// Fungsi untuk menandai field sebagai invalid
function markInvalid(field) {
    if (field.type === 'radio') {
        // Untuk radio buttons, tandai parent label
        const parentLabel = field.closest('.radio-option') || field.closest('.radio-table');
        if (parentLabel) {
            parentLabel.classList.add('invalid');
            
            // Tambahkan border merah pada radio circle
            const radioCircle = parentLabel.querySelector('.radio-circle');
            if (radioCircle) {
                radioCircle.style.borderColor = '#ea4335';
            }
        }
    } else {
        field.style.borderColor = '#ea4335';
        field.style.boxShadow = '0 0 0 2px rgba(234, 67, 53, 0.2)';
    }
    
    // Hapus class valid jika ada
    if (field.type !== 'radio') {
        field.classList.remove('valid');
        field.classList.add('invalid');
    }
}

// Fungsi untuk menandai field sebagai valid
function markValid(field) {
    if (field.type === 'radio') {
        // Untuk radio buttons, hapus invalid dari parent label
        const parentLabel = field.closest('.radio-option') || field.closest('.radio-table');
        if (parentLabel) {
            parentLabel.classList.remove('invalid');
            
            // Reset border radio circle
            const radioCircle = parentLabel.querySelector('.radio-circle');
            if (radioCircle) {
                if (field.checked) {
                    radioCircle.style.borderColor = '#4285f4';
                } else {
                    radioCircle.style.borderColor = '#dadce0';
                }
            }
        }
    } else {
        field.style.borderColor = '#34a853';
        field.style.boxShadow = '0 0 0 2px rgba(52, 168, 83, 0.2)';
        
        // Reset ke border default setelah beberapa detik
        setTimeout(() => {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        }, 2000);
    }
    
    // Hapus class invalid jika ada
    if (field.type !== 'radio') {
        field.classList.remove('invalid');
        field.classList.add('valid');
    }
}

// Fungsi untuk menampilkan pesan error
function showErrorMessage(message) {
    // Hapus pesan error sebelumnya jika ada
    hideErrorMessage();
    
    // Buat elemen pesan error
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message-global';
    errorDiv.style.backgroundColor = '#fce8e6';
    errorDiv.style.color = '#c5221f';
    errorDiv.style.padding = '16px';
    errorDiv.style.marginBottom = '20px';
    errorDiv.style.borderRadius = '4px';
    errorDiv.style.borderLeft = '4px solid #ea4335';
    errorDiv.style.fontSize = '14px';
    errorDiv.innerHTML = `<strong><i class="fas fa-exclamation-circle"></i> Perhatian:</strong> ${message}`;
    
    // Tambahkan ke form
    const formSection = document.querySelector('.form-section');
    if (formSection) {
        formSection.insertBefore(errorDiv, formSection.firstChild);
    }
}

// Fungsi untuk menyembunyikan pesan error
function hideErrorMessage() {
    const existingError = document.querySelector('.error-message-global');
    if (existingError) {
        existingError.remove();
    }
}

// Fungsi untuk mengosongkan halaman
function clearPage(pageNumber) {
    console.log(`Clearing page ${pageNumber}`);
    
    if (pageNumber === 1) {
        // Clear halaman 1
        document.getElementById('nama-lengkap').value = '';
        document.getElementById('nipp').value = '';
        
        // Clear radio buttons
        document.querySelectorAll('#page-1 input[type="radio"]').forEach(radio => {
            radio.checked = false;
            const parentLabel = radio.closest('.radio-option');
            if (parentLabel) {
                parentLabel.classList.remove('invalid');
                const radioCircle = parentLabel.querySelector('.radio-circle');
                if (radioCircle) {
                    radioCircle.style.borderColor = '#dadce0';
                }
            }
        });
        
        // Reset styling
        document.querySelectorAll('#page-1 input').forEach(input => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
            input.classList.remove('invalid', 'valid');
        });
        
    } else if (pageNumber === 2) {
        // Clear halaman 2
        document.getElementById('kedudukan').value = '';
        document.getElementById('jabatan').value = '';
        
        // Clear radio buttons di tabel
        document.querySelectorAll('#page-2 input[type="radio"]').forEach(radio => {
            radio.checked = false;
            const parentLabel = radio.closest('.radio-table');
            if (parentLabel) {
                parentLabel.classList.remove('invalid');
                const radioCircle = parentLabel.querySelector('.radio-circle');
                if (radioCircle) {
                    radioCircle.style.borderColor = '#dadce0';
                }
            }
        });
        
        // Reset styling
        document.querySelectorAll('#page-2 select').forEach(select => {
            select.style.borderColor = '';
            select.style.boxShadow = '';
            select.classList.remove('invalid', 'valid');
        });
        
        // Reset highlight baris tabel
        document.querySelectorAll('#page-2 .table-row').forEach(row => {
            row.style.backgroundColor = '';
        });
        
    } else if (pageNumber === 3) {
        // Clear halaman 3
        document.getElementById('komentar').value = '';
        
        // Clear radio buttons di tabel
        document.querySelectorAll('#page-3 input[type="radio"]').forEach(radio => {
            radio.checked = false;
            const parentLabel = radio.closest('.radio-table');
            if (parentLabel) {
                parentLabel.classList.remove('invalid');
                const radioCircle = parentLabel.querySelector('.radio-circle');
                if (radioCircle) {
                    radioCircle.style.borderColor = '#dadce0';
                }
            }
        });
        
        // Reset styling
        document.querySelectorAll('#page-3 textarea').forEach(textarea => {
            textarea.style.borderColor = '';
            textarea.style.boxShadow = '';
            textarea.classList.remove('invalid', 'valid');
        });
        
        // Reset highlight baris tabel
        document.querySelectorAll('#page-3 .table-row').forEach(row => {
            row.style.backgroundColor = '';
        });
    }
    
    // Hapus pesan error global
    hideErrorMessage();
    
    alert('Form pada halaman ini telah dibersihkan.');
}

// Fungsi untuk highlight baris tabel saat radio dipilih
function highlightTableRow(radio) {
    const row = radio.closest('.table-row');
    
    // Reset semua baris di tabel yang sama
    const table = row.closest('.assessment-table');
    table.querySelectorAll('.table-row').forEach(r => {
        r.style.backgroundColor = '';
    });
    
    // Highlight baris yang dipilih
    if (radio.checked) {
        row.style.backgroundColor = '#e8f0fe';
    }
}

// Fungsi untuk mengirim form
function submitForm() {
    console.log('Submitting form...');
    
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
        nama: document.getElementById('nama-lengkap').value,
        nipp: document.getElementById('nipp').value,
        jenisKelamin: document.querySelector('input[name="gender"]:checked')?.value,
        
        // Data jabatan
        kedudukan: document.getElementById('kedudukan').value,
        jabatan: document.getElementById('jabatan').value,
        
        // Komentar
        komentar: document.getElementById('komentar')?.value,
        
        // Timestamp
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('id-ID'),
        time: new Date().toLocaleTimeString('id-ID')
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
        scoresByItem: {},
        itemsByPage: { page2: 0, page3: 0 }
    };
    
    // Hitung item dari halaman 2 (1-5)
    for (let i = 1; i <= 5; i++) {
        const radio = document.querySelector(`input[name="itcs-${i}"]:checked`);
        if (radio) {
            results.totalItems++;
            results.itemsAnswered++;
            results.itemsByPage.page2++;
            
            const score = parseInt(radio.value);
            results.totalScore += score;
            results.scoresByItem[`itcs-${i}`] = score;
        } else {
            results.totalItems++;
        }
    }
    
    // Hitung item dari halaman 3 (25-29)
    for (let i = 25; i <= 29; i++) {
        const radio = document.querySelector(`input[name="itcs-${i}"]:checked`);
        if (radio) {
            results.totalItems++;
            results.itemsAnswered++;
            results.itemsByPage.page3++;
            
            const score = parseInt(radio.value);
            results.totalScore += score;
            results.scoresByItem[`itcs-${i}`] = score;
        } else {
            results.totalItems++;
        }
    }
    
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
    } else if (avgScore > 0) {
        results.category = 'Sangat Kurang';
        results.categoryColor = '#d93025';
    } else {
        results.category = 'Belum Dinilai';
        results.categoryColor = '#5f6368';
    }
    
    console.log('Assessment results:', results);
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
    
    console.log('Data tersimpan ke localStorage:', submission);
    console.log('Total submissions:', allSubmissions.length);
}

// Fungsi untuk menampilkan pesan terima kasih
function showThankYouMessage() {
    console.log('Showing thank you message');
    
    // Sembunyikan form
    document.querySelector('form').style.display = 'none';
    
    // Tampilkan pesan terima kasih
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fungsi untuk mereset form
function resetForm() {
    console.log('Resetting form');
    
    // Reset semua input form
    document.getElementById('evaluation-form').reset();
    
    // Reset radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
        
        // Reset styling radio
        const parentLabel = radio.closest('.radio-option') || radio.closest('.radio-table');
        if (parentLabel) {
            parentLabel.classList.remove('invalid', 'selected');
            const radioCircle = parentLabel.querySelector('.radio-circle');
            if (radioCircle) {
                radioCircle.style.borderColor = '#dadce0';
            }
        }
    });
    
    // Reset highlight baris tabel
    document.querySelectorAll('.table-row').forEach(row => {
        row.style.backgroundColor = '';
    });
    
    // Reset styling semua input, select, textarea
    document.querySelectorAll('input, select, textarea').forEach(field => {
        field.style.borderColor = '';
        field.style.boxShadow = '';
        field.classList.remove('invalid', 'valid');
    });
    
    // Hapus pesan error
    hideErrorMessage();
    
    // Tampilkan halaman 1 lagi
    showPage(1);
    
    // Tampilkan form, sembunyikan pesan terima kasih
    document.querySelector('form').style.display = 'block';
    document.getElementById('thank-you-message').style.display = 'none';
    
    // Scroll ke atas
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('Form reset complete');
}
