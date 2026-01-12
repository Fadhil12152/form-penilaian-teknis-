// Data struktur untuk semua peralatan dan pertanyaannya
const equipmentData = {
    // PDSE (Peralatan Dalam Sinyal Elektrik)
    westrace_mk1: {
        id: "westrace_mk1",
        name: "Westrace MK I",
        sectionId: "section4",
        questions: [
            { id: "hvlm", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul HVLM" },
            { id: "vpim", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul VPIM" },
            { id: "vrom", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul VROM" },
            { id: "sof", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul SOF" },
            { id: "ncdc", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul NCDC" },
            { id: "lcp", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul LCP" },
            { id: "pin_terminal", text: "Sejauh mana anda memahami fungsi dan prinsip kerja modul pin terminal di ER" }
        ]
    },
    mis_801: {
        id: "mis_801",
        name: "MIS 801",
        sectionId: "section6",
        questions: [
            { id: "zre", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul ZRE" },
            { id: "zri", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul ZRI" },
            { id: "re", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul RE" },
            { id: "ri", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul RI" },
            { id: "r", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul R" },
            { id: "swh", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SWH" },
            { id: "swhw", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SWHW" },
            { id: "swzh", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SWZH" },
            { id: "sah", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SAH" },
            { id: "swr", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SWR" },
            { id: "swvf", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SWVF" },
            { id: "wf", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul WF" },
            { id: "wad", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul WAD" },
            { id: "dw", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul DW" },
            { id: "ga", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul GA" },
            { id: "frm", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul FRM" },
            { id: "frb", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul FRB" },
            { id: "fl", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul FL" },
            { id: "schl", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul SCHL" },
            { id: "lcp_mis", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul LCP" },
            { id: "data_logger_mis", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Data Logger" },
            { id: "pin_terminal_mis", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Pin terminal di ER" }
        ]
    },
    sil_02: {
        id: "sil_02",
        name: "SIL 02",
        sectionId: "section8",
        questions: [
            { id: "plc", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul PLC" },
            { id: "remote_io", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Remote I/O" },
            { id: "io_logic", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul I/O Logic" },
            { id: "relay_sil", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Relay" },
            { id: "pin_terminal_sil", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Pin Terminal di ER" },
            { id: "data_logger_sil", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul Data Logger" },
            { id: "lcp_sil", text: "Seberapa paham anda terkait fungsi dan prinsip kerja modul LCP" }
        ]
    },
    // Data untuk peralatan lainnya (disingkat untuk contoh)
    sil_02_next_g: {
        id: "sil_02_next_g",
        name: "SIL 02 Next G",
        sectionId: "section10",
        questions: [
            { id: "x_sb01", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul X-SB01" },
            { id: "x_cpu", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul X CPU" },
            { id: "x_com", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul X COM" }
        ]
    },
    vpi: {
        id: "vpi",
        name: "VPI",
        sectionId: "section12",
        questions: [
            { id: "cpu_pd", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul CPU/PD" },
            { id: "vrd", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul VRD" },
            { id: "io_bus", text: "Seberapa paham anda terkait Fungsi dan prinsip kerja modul I/O BUS" }
        ]
    },
    // Dan seterusnya untuk semua peralatan...
};

// State aplikasi
const appState = {
    currentSection: 1,
    totalSections: 85,
    selectedEquipment: new Set(['administrasi', 'lain_lain']), // Default wajib
    formData: {},
    sections: [
        { id: "section1", title: "Profil Pribadi", required: true },
        { id: "section2", title: "Profil Jabatan", required: true },
        { id: "section3", title: "Pemilihan Peralatan", required: true }
    ]
};

// Inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderSectionList();
    updateProgress();
});

function initializeApp() {
    // Tambahkan section dinamis berdasarkan peralatan
    Object.values(equipmentData).forEach(equipment => {
        appState.sections.push({
            id: equipment.sectionId,
            title: equipment.name,
            required: false,
            equipmentId: equipment.id
        });
    });
    
    // Tambahkan section administrasi dan lain-lain
    appState.sections.push(
        { id: "section84", title: "Administrasi", required: true },
        { id: "section85", title: "Lain-lain", required: true }
    );
    
    // Tampilkan section pertama
    showSection(1);
}

function setupEventListeners() {
    // Navigasi tombol
    document.getElementById('prevBtn').addEventListener('click', goToPreviousSection);
    document.getElementById('nextBtn').addEventListener('click', goToNextSection);
    
    // Tombol sidebar
    document.getElementById('jumpToEquipment').addEventListener('click', () => showSection(3));
    document.getElementById('showSummary').addEventListener('click', showSummary);
    
    // Tombol submit
    document.getElementById('submitForm').addEventListener('click', submitForm);
    document.getElementById('printSummary').addEventListener('click', printSummary);
    
    // Modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.getElementById('closeSummary').addEventListener('click', closeModal);
    document.getElementById('exportSummary').addEventListener('click', exportToPDF);
    
    // Checkbox peralatan - untuk menampilkan/sembunyikan section dinamis
    document.querySelectorAll('input[name="peralatan[]"]').forEach(checkbox => {
        checkbox.addEventListener('change', handleEquipmentSelection);
    });
    
    // Klik di luar modal untuk menutup
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('summaryModal');
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            goToPreviousSection();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            goToNextSection();
        }
    });
}

function handleEquipmentSelection(e) {
    const checkbox = e.target;
    const equipmentId = checkbox.value;
    const sectionId = checkbox.dataset.section;
    
    if (checkbox.checked) {
        appState.selectedEquipment.add(equipmentId);
        
        // Buat section dinamis untuk peralatan ini jika belum ada
        if (equipmentData[equipmentId] && !document.getElementById(sectionId)) {
            createDynamicSection(equipmentData[equipmentId]);
        }
    } else {
        appState.selectedEquipment.delete(equipmentId);
    }
    
    // Update section list
    renderSectionList();
    updateProgress();
}

function createDynamicSection(equipment) {
    const dynamicSections = document.getElementById('dynamicSections');
    
    // Section pertanyaan konfirmasi
    const confirmSection = document.createElement('section');
    confirmSection.id = equipment.sectionId;
    confirmSection.className = 'form-section';
    
    const confirmSectionNumber = parseInt(equipment.sectionId.replace('section', '')) - 3;
    
    confirmSection.innerHTML = `
        <div class="section-header">
            <h2>Section ${confirmSectionNumber} dari 85</h2>
            <h3>PDSE</h3>
        </div>
        
        <div class="section-content">
            <div class="form-group">
                <h3>${equipment.name}</h3>
                <p>Apakah Anda memiliki peralatan ${equipment.name}?</p>
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" name="${equipment.id}_confirm" value="ya" required>
                        <span class="radio-custom"></span>
                        Ya
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="${equipment.id}_confirm" value="tidak" required>
                        <span class="radio-custom"></span>
                        Tidak
                    </label>
                </div>
            </div>
        </div>
    `;
    
    dynamicSections.appendChild(confirmSection);
    
    // Section pertanyaan rating
    const questionsSection = document.createElement('section');
    questionsSection.id = `${equipment.sectionId}_questions`;
    questionsSection.className = 'form-section';
    
    const questionsSectionNumber = confirmSectionNumber + 1;
    
    let questionsHTML = '';
    equipment.questions.forEach((question, index) => {
        questionsHTML += `
            <div class="rating-question">
                <label>${question.text}</label>
                <div class="rating-container">
                    <div class="rating-scale">
                        <span>Sangat kurang</span>
                        <div class="rating-options">
                            ${Array.from({length: 10}, (_, i) => i + 1).map(num => `
                                <label><input type="radio" name="${equipment.id}_${question.id}" value="${num}"> ${num}</label>
                            `).join('')}
                        </div>
                        <span>Sangat Baik</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    questionsSection.innerHTML = `
        <div class="section-header">
            <h2>Section ${questionsSectionNumber} dari 85</h2>
            <h3>Pemahaman terkait Peralatan ${equipment.name}</h3>
        </div>
        
        <div class="section-content">
            <div class="form-group">
                <h3>Pemahaman terkait Peralatan ${equipment.name}</h3>
                <p class="description">(optional)</p>
            </div>
            ${questionsHTML}
        </div>
    `;
    
    dynamicSections.appendChild(questionsSection);
    
    // Tambahkan ke daftar section
    appState.sections.splice(confirmSectionNumber - 1, 0, {
        id: equipment.sectionId,
        title: `Konfirmasi ${equipment.name}`,
        required: false,
        equipmentId: equipment.id
    });
    
    appState.sections.splice(confirmSectionNumber, 0, {
        id: `${equipment.sectionId}_questions`,
        title: `Pertanyaan ${equipment.name}`,
        required: false,
        equipmentId: equipment.id
    });
    
    // Update total sections
    appState.totalSections = appState.sections.length;
    document.getElementById('totalSections').textContent = appState.totalSections;
}

function showSection(sectionNumber) {
    // Validasi input section
    if (sectionNumber < 1 || sectionNumber > appState.totalSections) return;
    
    // Sembunyikan section aktif
    document.querySelectorAll('.form-section.active').forEach(section => {
        section.classList.remove('active');
    });
    
    // Update section aktif di state
    appState.currentSection = sectionNumber;
    
    // Tampilkan section yang dituju
    const targetSection = appState.sections[sectionNumber - 1];
    const sectionElement = document.getElementById(targetSection.id);
    
    if (sectionElement) {
        sectionElement.classList.add('active');
        
        // Update UI
        document.getElementById('currentSection').textContent = sectionNumber;
        updateNavigationButtons();
        updateProgress();
        updateActiveSectionInList();
        
        // Scroll ke atas form
        document.querySelector('.form-container').scrollTop = 0;
    }
}

function goToPreviousSection() {
    if (appState.currentSection > 1) {
        // Validasi section saat ini sebelum pindah
        if (validateCurrentSection()) {
            showSection(appState.currentSection - 1);
        }
    }
}

function goToNextSection() {
    if (appState.currentSection < appState.totalSections) {
        // Validasi section saat ini sebelum pindah
        if (validateCurrentSection()) {
            showSection(appState.currentSection + 1);
        }
    }
}

function validateCurrentSection() {
    const currentSection = appState.sections[appState.currentSection - 1];
    const sectionElement = document.getElementById(currentSection.id);
    
    // Cek field required
    const requiredInputs = sectionElement.querySelectorAll('[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if (!input.value && !input.checked) {
            isValid = false;
            // Highlight field yang error
            input.style.borderColor = 'var(--danger-color)';
            
            // Tambahkan event untuk menghapus highlight saat diisi
            const removeHighlight = () => {
                input.style.borderColor = '';
                input.removeEventListener('input', removeHighlight);
                input.removeEventListener('change', removeHighlight);
            };
            
            input.addEventListener('input', removeHighlight);
            input.addEventListener('change', removeHighlight);
        }
    });
    
    if (!isValid) {
        alert('Harap lengkapi semua field yang wajib diisi sebelum melanjutkan.');
    }
    
    return isValid;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Update tombol sebelumnya
    prevBtn.disabled = appState.currentSection === 1;
    
    // Update tombol selanjutnya
    if (appState.currentSection === appState.totalSections) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex';
    }
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = (appState.currentSection / appState.totalSections) * 100;
    
    progressFill.style.width = `${progressPercentage}%`;
}

function renderSectionList() {
    const sectionList = document.getElementById('sectionList');
    sectionList.innerHTML = '';
    
    appState.sections.forEach((section, index) => {
        // Skip section yang tidak dipilih (kecuali yang required)
        if (!section.required && section.equipmentId && !appState.selectedEquipment.has(section.equipmentId)) {
            return;
        }
        
        const sectionItem = document.createElement('div');
        sectionItem.className = 'section-item';
        
        if (index + 1 === appState.currentSection) {
            sectionItem.classList.add('active');
        }
        
        // Tandai section yang sudah diisi
        const isCompleted = checkSectionCompletion(index + 1);
        if (isCompleted) {
            sectionItem.classList.add('completed');
        }
        
        sectionItem.innerHTML = `
            <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
            <span>${index + 1}. ${section.title}</span>
        `;
        
        sectionItem.addEventListener('click', () => {
            if (validateCurrentSection()) {
                showSection(index + 1);
            }
        });
        
        sectionList.appendChild(sectionItem);
    });
}

function updateActiveSectionInList() {
    document.querySelectorAll('.section-item').forEach((item, index) => {
        item.classList.remove('active');
        
        // Cari index yang sesuai dengan section saat ini
        let currentIndex = 0;
        for (let i = 0; i < appState.sections.length; i++) {
            const section = appState.sections[i];
            if (!section.required && section.equipmentId && !appState.selectedEquipment.has(section.equipmentId)) {
                continue;
            }
            
            if (i === appState.currentSection - 1) {
                currentIndex = index;
                break;
            }
        }
        
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

function checkSectionCompletion(sectionNumber) {
    // Untuk sederhana, kita anggap section sudah selesai jika sudah dikunjungi
    return sectionNumber < appState.currentSection;
}

function collectFormData() {
    const formData = {};
    
    // Data profil
    formData.nama = document.getElementById('nama').value;
    formData.nipp = document.getElementById('nipp').value;
    formData.jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked')?.value;
    formData.jabatan = document.getElementById('jabatan').value;
    formData.unit_kerja = document.getElementById('unit_kerja').value;
    formData.lokasi_kerja = document.getElementById('lokasi_kerja').value;
    formData.pengalaman = document.getElementById('pengalaman').value;
    
    // Data peralatan yang dipilih
    formData.peralatan = Array.from(appState.selectedEquipment);
    
    // Data rating untuk peralatan yang dipilih
    formData.ratings = {};
    
    appState.selectedEquipment.forEach(equipmentId => {
        if (equipmentData[equipmentId]) {
            formData.ratings[equipmentId] = {};
            
            equipmentData[equipmentId].questions.forEach(question => {
                const radio = document.querySelector(`input[name="${equipmentId}_${question.id}"]:checked`);
                if (radio) {
                    formData.ratings[equipmentId][question.id] = radio.value;
                }
            });
        }
    });
    
    // Data administrasi
    const adminFields = ['rab', 'nota_dinas', 'pengelolaan_dokumen', 'sap_mm', 'alur_kontrak'];
    formData.administrasi = {};
    
    adminFields.forEach(field => {
        const radio = document.querySelector(`input[name="${field}"]:checked`);
        if (radio) {
            formData.administrasi[field] = radio.value;
        }
    });
    
    // Data lain-lain
    const otherFields = ['avo_meter', 'las_listrik', 'insulation_tester'];
    formData.lain_lain = {};
    
    otherFields.forEach(field => {
        const radio = document.querySelector(`input[name="${field}"]:checked`);
        if (radio) {
            formData.lain_lain[field] = radio.value;
        }
    });
    
    return formData;
}

function submitForm() {
    // Validasi semua section
    for (let i = 1; i <= appState.totalSections; i++) {
        const section = appState.sections[i - 1];
        
        // Skip section yang tidak dipilih
        if (!section.required && section.equipmentId && !appState.selectedEquipment.has(section.equipmentId)) {
            continue;
        }
        
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) continue;
        
        const requiredInputs = sectionElement.querySelectorAll('[required]');
        for (const input of requiredInputs) {
            if (!input.value && !input.checked) {
                showSection(i);
                alert(`Harap lengkapi semua field yang wajib diisi di section "${section.title}"`);
                return;
            }
        }
    }
    
    // Kumpulkan data
    appState.formData = collectFormData();
    
    // Simpan ke localStorage (simulasi pengiriman data)
    localStorage.setItem('employeeEvaluationData', JSON.stringify(appState.formData));
    
    // Tampilkan pesan sukses
    document.getElementById('completionMessage').style.display = 'block';
    document.getElementById('submitForm').style.display = 'none';
    
    // Scroll ke pesan sukses
    document.getElementById('completionMessage').scrollIntoView({ behavior: 'smooth' });
    
    console.log('Data evaluasi berhasil dikumpulkan:', appState.formData);
}

function showSummary() {
    // Kumpulkan data terbaru
    appState.formData = collectFormData();
    
    const modal = document.getElementById('summaryModal');
    const summaryContent = document.getElementById('summaryContent');
    
    // Buat ringkasan
    let summaryHTML = `
        <div class="summary-section">
            <h4><i class="fas fa-user"></i> Profil Pribadi</h4>
            <div class="summary-item">
                <span class="label">Nama Lengkap:</span>
                <span class="value">${appState.formData.nama || '-'}</span>
            </div>
            <div class="summary-item">
                <span class="label">NIPP:</span>
                <span class="value">${appState.formData.nipp || '-'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Jenis Kelamin:</span>
                <span class="value">${appState.formData.jenis_kelamin || '-'}</span>
            </div>
        </div>
        
        <div class="summary-section">
            <h4><i class="fas fa-briefcase"></i> Profil Jabatan</h4>
            <div class="summary-item">
                <span class="label">Jabatan:</span>
                <span class="value">${appState.formData.jabatan || '-'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Unit Kerja:</span>
                <span class="value">${appState.formData.unit_kerja || '-'}</span>
            </div>
            <div class="summary-item">
                <span class="label">Pengalaman Kerja:</span>
                <span class="value">${appState.formData.pengalaman || '0'} tahun</span>
            </div>
        </div>
        
        <div class="summary-section">
            <h4><i class="fas fa-cogs"></i> Peralatan yang Dikuasai</h4>
    `;
    
    // Daftar peralatan
    appState.selectedEquipment.forEach(equipmentId => {
        let equipmentName = equipmentId;
        
        if (equipmentData[equipmentId]) {
            equipmentName = equipmentData[equipmentId].name;
        } else if (equipmentId === 'administrasi') {
            equipmentName = 'Administrasi';
        } else if (equipmentId === 'lain_lain') {
            equipmentName = 'Lain-lain';
        }
        
        summaryHTML += `
            <div class="summary-item">
                <span class="value">${equipmentName}</span>
            </div>
        `;
    });
    
    summaryHTML += `</div>`;
    
    // Ringkasan rating
    summaryHTML += `
        <div class="summary-section">
            <h4><i class="fas fa-chart-bar"></i> Rata-rata Rating</h4>
    `;
    
    // Hitung rata-rata rating per peralatan
    let totalRatings = 0;
    let ratingCount = 0;
    
    Object.keys(appState.formData.ratings || {}).forEach(equipmentId => {
        const ratings = appState.formData.ratings[equipmentId];
        const values = Object.values(ratings).map(v => parseInt(v)).filter(v => !isNaN(v));
        
        if (values.length > 0) {
            const avg = values.reduce((a, b) => a + b, 0) / values.length;
            totalRatings += avg;
            ratingCount++;
            
            const equipmentName = equipmentData[equipmentId]?.name || equipmentId;
            summaryHTML += `
                <div class="summary-item">
                    <span class="label">${equipmentName}:</span>
                    <span class="value">${avg.toFixed(1)} / 10</span>
                </div>
            `;
        }
    });
    
    // Rating administrasi
    if (appState.formData.administrasi) {
        const adminValues = Object.values(appState.formData.administrasi).map(v => parseInt(v)).filter(v => !isNaN(v));
        if (adminValues.length > 0) {
            const avg = adminValues.reduce((a, b) => a + b, 0) / adminValues.length;
            totalRatings += avg;
            ratingCount++;
            
            summaryHTML += `
                <div class="summary-item">
                    <span class="label">Administrasi:</span>
                    <span class="value">${avg.toFixed(1)} / 10</span>
                </div>
            `;
        }
    }
    
    // Rating lain-lain
    if (appState.formData.lain_lain) {
        const otherValues = Object.values(appState.formData.lain_lain).map(v => parseInt(v)).filter(v => !isNaN(v));
        if (otherValues.length > 0) {
            const avg = otherValues.reduce((a, b) => a + b, 0) / otherValues.length;
            totalRatings += avg;
            ratingCount++;
            
            summaryHTML += `
                <div class="summary-item">
                    <span class="label">Lain-lain:</span>
                    <span class="value">${avg.toFixed(1)} / 10</span>
                </div>
            `;
        }
    }
    
    // Rata-rata keseluruhan
    if (ratingCount > 0) {
        const overallAvg = totalRatings / ratingCount;
        summaryHTML += `
            <div class="summary-item" style="border-top: 2px solid var(--primary-color); padding-top: 10px; margin-top: 10px;">
                <span class="label" style="font-weight: 600;">Rata-rata Keseluruhan:</span>
                <span class="value" style="font-weight: 600; color: var(--primary-color);">${overallAvg.toFixed(1)} / 10</span>
            </div>
        `;
    }
    
    summaryHTML += `</div>`;
    
    summaryContent.innerHTML = summaryHTML;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('summaryModal').style.display = 'none';
}

function printSummary() {
    // Membuka jendela baru untuk mencetak
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Ringkasan Evaluasi Pegawai</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 10px; }
                    .section { margin-bottom: 20px; }
                    .item { display: flex; justify-content: space-between; margin-bottom: 5px; }
                    .label { font-weight: bold; }
                    .total { border-top: 2px solid #333; padding-top: 10px; margin-top: 10px; }
                    @media print {
                        body { font-size: 12pt; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <h1>Ringkasan Evaluasi Pegawai</h1>
                <div class="section">
                    <h2>Profil Pribadi</h2>
                    <div class="item"><span class="label">Nama:</span> <span>${appState.formData.nama || '-'}</span></div>
                    <div class="item"><span class="label">NIPP:</span> <span>${appState.formData.nipp || '-'}</span></div>
                    <div class="item"><span class="label">Jenis Kelamin:</span> <span>${appState.formData.jenis_kelamin || '-'}</span></div>
                </div>
                <div class="section">
                    <h2>Peralatan yang Dikuasai</h2>
                    ${Array.from(appState.selectedEquipment).map(eq => {
                        let name = eq;
                        if (equipmentData[eq]) name = equipmentData[eq].name;
                        if (eq === 'administrasi') name = 'Administrasi';
                        if (eq === 'lain_lain') name = 'Lain-lain';
                        return `<div>• ${name}</div>`;
                    }).join('')}
                </div>
                <div class="section">
                    <h2>Ringkasan Penilaian</h2>
                    <p>Data evaluasi telah berhasil disimpan.</p>
                    <p>Tanggal: ${new Date().toLocaleDateString('id-ID')}</p>
                </div>
                <button class="no-print" onclick="window.print()">Cetak</button>
                <button class="no-print" onclick="window.close()">Tutup</button>
            </body>
        </html>
    `);
    printWindow.document.close();
}

function exportToPDF() {
    // Simulasi ekspor PDF
    alert('Fitur ekspor ke PDF akan mengunduh file ringkasan evaluasi. (Fitur ini memerlukan library eksternal seperti jsPDF)');
    
    // Dalam implementasi nyata, Anda bisa menggunakan library seperti:
    // 1. jsPDF (https://github.com/parallax/jsPDF)
    // 2. html2pdf.js (https://github.com/eKoopmans/html2pdf.js)
    
    // Contoh sederhana:
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text("Ringkasan Evaluasi Pegawai", 10, 10);
    // doc.save("evaluasi-pegawai.pdf");
}
