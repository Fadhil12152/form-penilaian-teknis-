// Data pertanyaan berdasarkan peralatan
const questionsData = {
    "ITCS-MS": [
        "Memahami SOP perawatan sesuai ITCS-MS",
        "Perawatan PDSM",
        "Perawatan Peraga Sinyal Mekanik",
        "Perawatan Wesel Mekanik",
        "Negative Check Persinyalan Mekanik",
        "Perawatan Saluran Kawat",
        "Perawatan Wesel Elektrik",
        "Perawatan PDSE",
        "Perawatan Peraga Sinyal Elektrik",
        "Perawatan Axle Counter",
        "Perawatan Track Circuit",
        "Perawatan Location Case",
        "Perawatan Pointlock/Perintang/Pelalau",
        "Perawatan WLSE",
        "Perawatan Kontak Deteksi",
        "Perawatan Pintu Perlintasan",
        "Perawatan Catu Daya",
        "Perawatan Radio Lokomotif",
        "Perawatan Peralatan Telekomunikasi di Stasiun",
        "Perawatan Peralatan Telekomunikasi di Luar Stasiun",
        "Perawatan Peralatan Telekomunikasi di Pintu Perlintasan",
        "Perawatan Serat Optik",
        "Perawatan Saluran Blok 1 dan 6 bulanan",
        "Uji Fungsi LBD",
        "Perawatan Bangunan E-House",
        "Perawatan Trafo Kering",
        "Perawatan Trafo Location Case dan Trafo Tiang",
        "Perawatan Lightning Arrester",
        "Pemeriksaan Kabel Outgoing",
        "Pengetesan Relay Proteksi DC Switch Gear"
    ],
    "PDSE": {
        "A. Westrace MK I": [
            "Memahami fungsi dan prinsip kerja modul HVLM",
            "Memahami fungsi dan prinsip kerja modul Vpim",
            "Memahami fungsi dan prinsip kerja modul Vrom",
            "Memahami fungsi dan prinsip kerja modul SOF",
            "Memahami fungsi dan prinsip kerja modul NCDC",
            "Memahami fungsi dan prinsip kerja modul LCP",
            "Memahami pin terminal di ER"
        ],
        "B. MIS 801": [
            "Memahami fungsi dan prinsip kerja modul ZRE",
            "Memahami fungsi dan prinsip kerja modul ZRI",
            "Memahami fungsi dan prinsip kerja modul RE",
            "Memahami fungsi dan prinsip kerja modul RI",
            "Memahami fungsi dan prinsip kerja modul R",
            "Memahami fungsi dan prinsip kerja modul SWH",
            "Memahami fungsi dan prinsip kerja modul SWHW",
            "Memahami fungsi dan prinsip kerja modul SWZH",
            "Memahami fungsi dan prinsip kerja modul SAH",
            "Memahami fungsi dan prinsip kerja modul SWR",
            "Memahami fungsi dan prinsip kerja modul SWVF",
            "Memahami fungsi dan prinsip kerja modul WF",
            "Memahami fungsi dan prinsip kerja modul WAD",
            "Memahami fungsi dan prinsip kerja modul DW",
            "Memahami fungsi dan prinsip kerja modul GA",
            "Memahami fungsi dan prinsip kerja modul FRM",
            "Memahami fungsi dan prinsip kerja modul FRB",
            "Memahami fungsi dan prinsip kerja modul FL",
            "Memahami fungsi dan prinsip kerja modul SCHL",
            "Memahami fungsi dan prinsip kerja modul LCP",
            "Memahami fungsi dan prinsip kerja Data Logger",
            "Memahami pin terminal di ER"
        ],
        "C. SIL-02": [
            "Memahami fungsi dan prinsip kerja modul PLC",
            "Memahami fungsi dan prinsip kerja modul Remote I/O",
            "Memahami fungsi dan prinsip kerja modul I/O Logic",
            "Memahami fungsi dan prinsip kerja modul Relay",
            "Memahami pin terminal di ER",
            "Memahami fungsi dan prinsip kerja Data logger",
            "Memahami fungsi dan prinsip kerja modul LCP"
        ],
        "D. SIL-02 Next G": [
            "Memahami fungsi dan prinsip kerja modul X-SB01",
            "Memahami fungsi dan prinsip kerja modul X-CPU",
            "Memahami fungsi dan prinsip kerja modul X-COM",
            "Memahami fungsi dan prinsip kerja modul X-DI",
            "Memahami fungsi dan prinsip kerja modul X-DO",
            "Memahami fungsi dan prinsip kerja modul Himatrix F1 DI",
            "Memahami fungsi dan prinsip kerja modul Himatrix F2 DO",
            "Memahami fungsi dan prinsip kerja modul Himatrix F30",
            "Memahami fungsi dan prinsip kerja modul Himatrix F3 DIO",
            "Memahami fungsi dan prinsip kerja modul Relay",
            "Memahami fungsi dan prinsip kerja modul LCP/VDU",
            "Memahami pin terminal di ER",
            "Memahami fungsi dan prinsip kerja Data Logger"
        ],
        "E. VPI": [
            "Memahami fungsi dan prinsip kerja modul CPU/PD",
            "Memahami fungsi dan prinsip kerja modul VRD",
            "Memahami fungsi dan prinsip kerja modul I/O Bus",
            "Memahami fungsi dan prinsip kerja modul SBO",
            "Memahami fungsi dan prinsip kerja modul DI",
            "Memahami fungsi dan prinsip kerja modul NVI",
            "Memahami fungsi dan prinsip kerja modul NVO",
            "Memahami fungsi dan prinsip kerja modul CSEX",
            "Memahami fungsi dan prinsip kerja modul Relay",
            "Memahami fungsi dan prinsip kerja modul LCP"
        ],
        "F. ELIXS": [
            "Memahami fungsi dan prinsip kerja modul VPM",
            "Memahami fungsi dan prinsip kerja modul CPS",
            "Memahami fungsi dan prinsip kerja modul UCI",
            "Memahami fungsi dan prinsip kerja modul CDU",
            "Memahami fungsi dan prinsip kerja modul VIO",
            "Memahami fungsi dan prinsip kerja Data Logger",
            "Memahami fungsi dan prinsip kerja modul VDU",
            "Memahami fungsi dan prinsip kerja modul Interface Relay"
        ],
        "G. SSI": [
            "Memahami fungsi dan prinsip kerja modul MPM",
            "Memahami fungsi dan prinsip kerja modul DLM",
            "Memahami fungsi dan prinsip kerja modul TFM",
            "Memahami fungsi dan prinsip kerja Technician Terminal",
            "Memahami fungsi dan prinsip kerja modul DMPM",
            "Memahami fungsi dan prinsip kerja modul PPM",
            "Memahami fungsi dan prinsip kerja modul LCP/VDU"
        ],
        "H. WESTRACE MK II": [
            "Memahami fungsi dan prinsip kerja modul PM",
            "Memahami fungsi dan prinsip kerja modul PIM",
            "Memahami fungsi dan prinsip kerja modul ROM",
            "Memahami fungsi dan prinsip kerja modul LOM",
            "Memahami fungsi dan prinsip kerja modul TCOM",
            "Memahami fungsi dan prinsip kerja modul SOM",
            "Memahami fungsi dan prinsip kerja modul RSA",
            "Memahami fungsi dan prinsip kerja modul SM-MAU",
            "Memahami fungsi dan prinsip kerja modul VDU"
        ]
    },
    "Motor Wesel": {
        "A. BSG-9": [
            "Memahami komponen dalam BSG-9",
            "Memahami fungsi komponen BSG-9",
            "Memahami wiring BSG-9",
            "Memahami terminal pin BSG-9"
        ],
        "B. S-90": [
            "Memahami komponen dalam S-90",
            "Memahami fungsi komponen S-90",
            "Memahami wiring S-90",
            "Memahami terminal pin S-90"
        ],
        "C. NSE": [
            "Memahami komponen dalam NSE",
            "Memahami fungsi komponen NSE",
            "Memahami wiring NSE",
            "Memahami terminal pin NSE"
        ],
        "D. T84M": [
            "Memahami komponen dalam T84M",
            "Memahami fungsi komponen T84M",
            "Memahami wiring T84M",
            "Memahami terminal pin T84M"
        ]
    },
    "Sinyal": {
        "A. SIL-02": [
            "Memahami fungsi dan prinsip kerja modul dan peralatan di box sinyal SIL-02",
            "Memahami nomor terminal dan penggunaannya di box sinyal SIL-02",
            "Memahami ceksheet dan titik pengukur di box sinyal SIL-02"
        ],
        "B. MIS-801": [
            "Memahami fungsi dan prinsip kerja modul dan peralatan di box sinyal MIS-801",
            "Memahami nomor terminal dan penggunaannya di box sinyal MIS-801",
            "Memahami ceksheet dan titik pengukur di box sinyal MIS-801"
        ],
        "C. Westrace": [
            "Memahami fungsi dan prinsip kerja modul dan peralatan di box sinyal Westrace",
            "Memahami nomor terminal dan penggunaannya di box sinyal Westrace",
            "Memahami ceksheet dan titik pengukur di box sinyal Westrace"
        ]
    },
    "Pendeteksi KA": {
        "A. Altpro": [
            "Memahami fungsi dan prinsip kerja Head sensor Altpro",
            "Memahami fungsi dan prinsip kerja modul VUR Altpro",
            "Memahami fungsi dan prinsip kerja modul MPU Altpro",
            "Memahami fungsi dan prinsip kerja modul Up Altpro",
            "Memahami fungsi dan prinsip kerja modul Zanap Altpro",
            "Memahami fungsi dan prinsip kerja modul RE Altpro",
            "Memahami fungsi dan prinsip kerja modul Zag Altpro",
            "Memahami fungsi dan prinsip kerja Dc 12 konverter Altpro"
        ],
        "B. Siemens": [
            "Memahami fungsi dan prinsip kerja Head Sensor Siemens",
            "Memahami fungsi dan prinsip kerja modul Wde Siemens",
            "Memahami fungsi dan prinsip kerja Bandpass filter Siemens",
            "Memahami fungsi dan prinsip kerja Generator board Siemens",
            "Memahami fungsi dan prinsip kerja modul Steu Siemens",
            "Memahami fungsi dan prinsip kerja modul Vau Siemens",
            "Memahami fungsi dan prinsip kerja modul Blea Siemens",
            "Memahami fungsi dan prinsip kerja modul Vesba Siemens",
            "Memahami fungsi dan prinsip kerja Power supply Siemens",
            "Memahami pin terminal Siemens"
        ],
        "C. Frauscher": [
            "Memahami fungsi dan prinsip kerja Wheel sensor Frauscher",
            "Memahami fungsi dan prinsip kerja modul GAK Frauscher",
            "Memahami fungsi dan prinsip kerja modul AEB Frauscher",
            "Memahami fungsi dan prinsip kerja modul COM-Adc Frauscher",
            "Memahami fungsi dan prinsip kerja modul IO-EXB Frauscher",
            "Memahami fungsi dan prinsip kerja modul PSC Frauscher",
            "Memahami fungsi dan prinsip kerja modul BSI Frauscher",
            "Memahami fungsi dan prinsip kerja modul ACB (ACS2000) Frauscher"
        ],
        "D. Thales": [
            "Memahami fungsi dan prinsip kerja Wheel sensor Thales",
            "Memahami fungsi dan prinsip kerja modul EAK Thales",
            "Memahami fungsi dan prinsip kerja Serial Board Thales",
            "Memahami fungsi dan prinsip kerja Parallel Board Thales",
            "Memahami fungsi dan prinsip kerja CPU Thales",
            "Memahami fungsi dan prinsip kerja Power Supply Thales"
        ],
        "E. Track Circuit": [
            "Memahami fungsi dan prinsip kerja Kabel I/O Track Circuit",
            "Memahami fungsi dan prinsip kerja Travo track (380 to 5V)",
            "Memahami fungsi dan prinsip kerja Resistor variable",
            "Memahami fungsi dan prinsip kerja Relay Tr",
            "Memahami pin terminal Track Circuit"
        ]
    }
};

// Inisialisasi aplikasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    initializeCheckboxLogic();
    setupEventListeners();
});

// Mengatur logika checkbox
function initializeCheckboxLogic() {
    // Fungsi untuk "Pilih Semua" di setiap kategori
    document.querySelectorAll('.category-all').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const category = this.closest('.category');
            const subItems = category.querySelectorAll('.equipment-item');
            
            subItems.forEach(item => {
                item.checked = this.checked;
            });
        });
    });
    
    // Fungsi untuk mengupdate "Pilih Semua" ketika sub-item berubah
    document.querySelectorAll('.equipment-item').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const category = this.closest('.category');
            const allCheckbox = category.querySelector('.category-all');
            const subItems = category.querySelectorAll('.equipment-item');
            
            const allChecked = Array.from(subItems).every(item => item.checked);
            allCheckbox.checked = allChecked;
        });
    });
}

// Mengatur event listener
function setupEventListeners() {
    // Tombol Tampilkan Pertanyaan
    document.getElementById('generate-questions').addEventListener('click', generateQuestions);
    
    // Tombol Reset Pilihan
    document.getElementById('reset-selection').addEventListener('click', resetSelection);
}

// Fungsi untuk menghasilkan pertanyaan berdasarkan pilihan peralatan
function generateQuestions() {
    // Dapatkan peralatan yang dipilih
    const selectedEquipment = getSelectedEquipment();
    
    if (selectedEquipment.length === 0) {
        alert('Silakan pilih minimal satu peralatan untuk dinilai.');
        return;
    }
    
    // Tampilkan container pertanyaan
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.style.display = 'block';
    
    // Kosongkan kontainer pertanyaan
    questionsContainer.innerHTML = '<h2><i class="fas fa-question-circle"></i> Pertanyaan Penilaian</h2>';
    
    // Tambahkan tombol untuk submit penilaian
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-assessment';
    submitButton.className = 'btn-primary';
    submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Penilaian';
    submitButton.style.marginTop = '20px';
    submitButton.style.marginBottom = '30px';
    
    // Tambahkan event listener untuk tombol submit
    submitButton.addEventListener('click', calculateResults);
    
    // Buat form untuk pertanyaan
    const form = document.createElement('form');
    form.id = 'assessment-form';
    
    // Buat pertanyaan untuk setiap peralatan yang dipilih
    selectedEquipment.forEach(equipment => {
        const category = equipment.category;
        const equipmentName = equipment.name;
        
        // Buat elemen kategori
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'question-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = `${category} - ${equipmentName}`;
        categoryDiv.appendChild(categoryTitle);
        
        // Dapatkan pertanyaan untuk peralatan ini
        let questions = [];
        
        if (category === "ITCS-MS") {
            questions = questionsData["ITCS-MS"];
        } else if (questionsData[category] && questionsData[category][equipmentName]) {
            questions = questionsData[category][equipmentName];
        } else {
            // Jika tidak ada pertanyaan spesifik, gunakan pertanyaan umum
            questions = [`Pemahaman umum tentang ${equipmentName}`];
        }
        
        // Buat elemen untuk setiap pertanyaan
        questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-item';
            
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = `${index + 1}. ${question}`;
            questionDiv.appendChild(questionText);
            
            // Tambahkan skala penilaian 1-10
            const ratingScale = createRatingScale(category, equipmentName, index);
            questionDiv.appendChild(ratingScale);
            
            categoryDiv.appendChild(questionDiv);
        });
        
        form.appendChild(categoryDiv);
    });
    
    // Tambahkan form ke container
    questionsContainer.appendChild(form);
    questionsContainer.appendChild(submitButton);
    
    // Scroll ke pertanyaan
    questionsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk membuat skala penilaian 1-10
function createRatingScale(category, equipment, questionIndex) {
    const scaleDiv = document.createElement('div');
    scaleDiv.className = 'rating-scale';
    
    // Label skala
    const labelsDiv = document.createElement('div');
    labelsDiv.className = 'scale-labels';
    
    const minLabel = document.createElement('span');
    minLabel.textContent = 'Sangat Kurang';
    
    const maxLabel = document.createElement('span');
    maxLabel.textContent = 'Sangat Baik';
    
    labelsDiv.appendChild(minLabel);
    labelsDiv.appendChild(maxLabel);
    
    // Opsi rating 1-10
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'scale-options';
    
    for (let i = 1; i <= 10; i++) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'rating-option';
        
        const numberSpan = document.createElement('span');
        numberSpan.className = 'rating-number';
        numberSpan.textContent = i;
        
        const radioDiv = document.createElement('div');
        radioDiv.className = 'radio-input';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `rating-${category}-${equipment}-${questionIndex}`;
        radioInput.id = `rating-${category}-${equipment}-${questionIndex}-${i}`;
        radioInput.value = i;
        radioInput.required = true;
        
        const radioCircle = document.createElement('span');
        radioCircle.className = 'radio-circle';
        
        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioCircle);
        
        optionDiv.appendChild(numberSpan);
        optionDiv.appendChild(radioDiv);
        optionsDiv.appendChild(optionDiv);
    }
    
    scaleDiv.appendChild(labelsDiv);
    scaleDiv.appendChild(optionsDiv);
    
    return scaleDiv;
}

// Fungsi untuk mendapatkan peralatan yang dipilih
function getSelectedEquipment() {
    const selected = [];
    
    document.querySelectorAll('.equipment-item:checked').forEach(checkbox => {
        const category = checkbox.getAttribute('data-category');
        let equipmentName = '';
        
        // Tentukan nama peralatan berdasarkan ID checkbox
        if (checkbox.id === 'itcs-ms') {
            equipmentName = 'ITCS-MS';
        } else if (checkbox.id.startsWith('pdse-')) {
            const letter = checkbox.id.split('-')[1];
            equipmentName = getPDSEFullName(letter);
        } else if (checkbox.id.startsWith('motor-')) {
            const letter = checkbox.id.split('-')[1];
            equipmentName = getMotorWeselFullName(letter);
        } else if (checkbox.id.startsWith('sinyal-')) {
            const letter = checkbox.id.split('-')[1];
            equipmentName = getSinyalFullName(letter);
        } else if (checkbox.id.startsWith('pendeteksi-')) {
            const letter = checkbox.id.split('-')[1];
            equipmentName = getPendeteksiFullName(letter);
        }
        
        if (equipmentName) {
            selected.push({
                category: category,
                name: equipmentName
            });
        }
    });
    
    return selected;
}

// Fungsi helper untuk mendapatkan nama lengkap peralatan
function getPDSEFullName(letter) {
    const names = {
        'a': 'A. Westrace MK I',
        'b': 'B. MIS 801',
        'c': 'C. SIL-02',
        'd': 'D. SIL-02 Next G',
        'e': 'E. VPI',
        'f': 'F. ELIXS',
        'g': 'G. SSI',
        'h': 'H. WESTRACE MK II'
    };
    
    return names[letter] || '';
}

function getMotorWeselFullName(letter) {
    const names = {
        'a': 'A. BSG-9',
        'b': 'B. S-90',
        'c': 'C. NSE',
        'd': 'D. T84M'
    };
    
    return names[letter] || '';
}

function getSinyalFullName(letter) {
    const names = {
        'a': 'A. SIL-02',
        'b': 'B. MIS-801',
        'c': 'C. Westrace'
    };
    
    return names[letter] || '';
}

function getPendeteksiFullName(letter) {
    const names = {
        'a': 'A. Altpro',
        'b': 'B. Siemens',
        'c': 'C. Frauscher',
        'd': 'D. Thales',
        'e': 'E. Track Circuit'
    };
    
    return names[letter] || '';
}

// Fungsi untuk menghitung hasil penilaian
function calculateResults() {
    // Validasi bahwa semua pertanyaan telah dijawab
    const form = document.getElementById('assessment-form');
    if (!form.checkValidity()) {
        alert('Harap isi semua pertanyaan sebelum mengirim penilaian.');
        return;
    }
    
    // Dapatkan semua nilai rating
    const ratings = [];
    const categories = {};
    
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        const value = parseInt(radio.value);
        ratings.push(value);
        
        // Ekstrak kategori dari nama radio button
        const nameParts = radio.name.split('-');
        if (nameParts.length >= 3) {
            const category = nameParts[1];
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(value);
        }
    });
    
    // Hitung statistik
    const totalQuestions = ratings.length;
    const totalScore = ratings.reduce((sum, value) => sum + value, 0);
    const averageScore = totalScore / totalQuestions;
    
    // Hitung persentase
    const maxPossibleScore = totalQuestions * 10;
    const percentage = (totalScore / maxPossibleScore) * 100;
    
    // Hitung rata-rata per kategori
    const categoryAverages = {};
    for (const [category, scores] of Object.entries(categories)) {
        const avg = scores.reduce((sum, value) => sum + value, 0) / scores.length;
        categoryAverages[category] = avg.toFixed(2);
    }
    
    // Tampilkan hasil
    displayResults(totalQuestions, totalScore, averageScore.toFixed(2), percentage.toFixed(2), categoryAverages);
}

// Fungsi untuk menampilkan hasil
function displayResults(totalQuestions, totalScore, averageScore, percentage, categoryAverages) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '';
    
    // Buat judul
    const title = document.createElement('h2');
    title.innerHTML = '<i class="fas fa-chart-bar"></i> Hasil Penilaian';
    resultsContainer.appendChild(title);
    
    // Ringkasan hasil
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'results-summary';
    
    const summaryCards = [
        { label: 'Total Pertanyaan', value: totalQuestions, icon: 'fas fa-question' },
        { label: 'Total Skor', value: totalScore, icon: 'fas fa-star' },
        { label: 'Rata-rata Skor', value: averageScore, icon: 'fas fa-calculator' },
        { label: 'Persentase', value: `${percentage}%`, icon: 'fas fa-percentage' }
    ];
    
    summaryCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'result-card';
        
        const icon = document.createElement('i');
        icon.className = card.icon;
        icon.style.fontSize = '2rem';
        icon.style.color = '#3498db';
        icon.style.marginBottom = '10px';
        
        const value = document.createElement('div');
        value.className = 'result-value';
        value.textContent = card.value;
        
        const label = document.createElement('div');
        label.className = 'result-label';
        label.textContent = card.label;
        
        cardDiv.appendChild(icon);
        cardDiv.appendChild(value);
        cardDiv.appendChild(label);
        
        summaryDiv.appendChild(cardDiv);
    });
    
    resultsContainer.appendChild(summaryDiv);
    
    // Tabel rata-rata per kategori
    if (Object.keys(categoryAverages).length > 0) {
        const categoryTitle = document.createElement('h3');
        categoryTitle.innerHTML = '<i class="fas fa-list-alt"></i> Rata-rata per Kategori';
        categoryTitle.style.marginTop = '30px';
        resultsContainer.appendChild(categoryTitle);
        
        const table = document.createElement('table');
        table.className = 'results-table';
        
        // Header tabel
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const header1 = document.createElement('th');
        header1.textContent = 'Kategori';
        
        const header2 = document.createElement('th');
        header2.textContent = 'Rata-rata Skor';
        
        const header3 = document.createElement('th');
        header3.textContent = 'Keterangan';
        
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);
        headerRow.appendChild(header3);
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Body tabel
        const tbody = document.createElement('tbody');
        
        for (const [category, avg] of Object.entries(categoryAverages)) {
            const row = document.createElement('tr');
            
            const cell1 = document.createElement('td');
            cell1.textContent = category;
            
            const cell2 = document.createElement('td');
            cell2.textContent = avg;
            
            const cell3 = document.createElement('td');
            const avgNum = parseFloat(avg);
            
            if (avgNum >= 8) {
                cell3.textContent = 'Sangat Baik';
                cell3.style.color = '#27ae60';
                cell3.style.fontWeight = 'bold';
            } else if (avgNum >= 6) {
                cell3.textContent = 'Baik';
                cell3.style.color = '#3498db';
                cell3.style.fontWeight = 'bold';
            } else if (avgNum >= 4) {
                cell3.textContent = 'Cukup';
                cell3.style.color = '#f39c12';
                cell3.style.fontWeight = 'bold';
            } else {
                cell3.textContent = 'Perlu Peningkatan';
                cell3.style.color = '#e74c3c';
                cell3.style.fontWeight = 'bold';
            }
            
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            tbody.appendChild(row);
        }
        
        table.appendChild(tbody);
        resultsContainer.appendChild(table);
    }
    
    // Tombol untuk reset penilaian
    const resetButton = document.createElement('button');
    resetButton.id = 'reset-assessment';
    resetButton.className = 'btn-secondary';
    resetButton.innerHTML = '<i class="fas fa-redo"></i> Buat Penilaian Baru';
    resetButton.style.marginTop = '30px';
    
    resetButton.addEventListener('click', function() {
        resetSelection();
        resultsContainer.style.display = 'none';
        document.getElementById('questions-container').style.display = 'none';
    });
    
    resultsContainer.appendChild(resetButton);
    
    // Scroll ke hasil
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk mereset pilihan
function resetSelection() {
    // Reset semua checkbox
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset kontainer pertanyaan
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.style.display = 'none';
    questionsContainer.innerHTML = '';
    
    // Reset kontainer hasil
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'none';
    resultsContainer.innerHTML = '';
    
    // Scroll kembali ke bagian atas
    document.querySelector('.equipment-selection').scrollIntoView({ behavior: 'smooth' });
}
