const fullEquipmentData = {
    "itcs_ms": {
        title: "I. ITCS-MS (Persinyalan Mekanik)",
        items: ["SOP ITCS-MS", "PDSM", "Peraga Sinyal Mekanik", "Wesel Mekanik", "Negative Check", "Saluran Kawat", "Peralatan Catu Daya"]
    },
    "pdse_westrace": {
        title: "II-A. PDSE (Westrace MK I)",
        items: ["Modul HVLM", "Modul Vpim", "Modul Vrom", "Modul SOF", "Modul NCDC", "Modul LCP", "Pin Terminal ER"]
    },
    "pdse_mis801": {
        title: "II-B. PDSE (MIS 801)",
        items: ["Modul ZRE/ZRI", "Modul RE/RI", "Modul SWH/SWR", "Modul WF/WAD/DW", "Modul GA/FRM/FRB", "Data Logger", "LCP"]
    },
    "pdse_sil02": {
        title: "II-C. PDSE (SIL-02 / Next G)",
        items: ["PLC & Remote I/O", "I/O Logic", "Modul X-CPU / X-COM", "Himatrix F1/F2/F3", "Data Logger SIL", "LCP / VDU"]
    },
    "motor_wesel": {
        title: "III. Motor Wesel",
        items: ["Komponen Dalam (BSG-9/S-90/NSE/T84M)", "Fungsi Komponen Mekanik", "Wiring Wesel Elektrik", "Terminal Pin & Pengukuran"]
    },
    "pendeteksi_ka": {
        title: "V. Pendeteksi KA",
        items: ["Head Sensor (Altpro/Siemens)", "Wheel Sensor (Frauscher/Thales)", "Track Circuit", "Modul VUR/MPU/Zanap", "EAK / GAK"]
    },
    "laa_gardu": {
        title: "VII. Listrik Aliran Atas & Gardu",
        items: ["Jaringan LAA (Cantilever/Kawat)", "Feeding System LAA", "Peralatan VCB / LBS 20KV", "Transformator & Penyearah", "HSCB & Sistem Negatif"]
    },
    "telekomunikasi": {
        title: "IX. Telekomunikasi",
        items: ["Central Radio (IDU/ODU)", "Base Station & Mux", "Radio Lokomotif (LTU/Console)", "Waystation & Peralatan PK", "Sistem Serat Optik"]
    },
    "administrasi": {
        title: "XI. Administrasi & SAP",
        items: ["Pembuatan RAB & Nota Dinas", "SAP MM & SAP-LAM", "Pembuatan WO & Men-TECO WO", "Pelaporan SRI"]
    },
    "alat_kerja": {
        title: "XII. Penggunaan Alat Kerja",
        items: ["AVO Meter & Insulation Tester", "OTDR & Splicer", "Grounding & Batere Tester", "Takel, Kotrek & Alat LAA"]
    }
};

const filterGrid = document.getElementById('filterGrid');
const questionsArea = document.getElementById('dynamicQuestionsArea');

// 1. Render Checkbox Filter
Object.keys(fullEquipmentData).forEach(key => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <input type="checkbox" id="filter_${key}" value="${key}">
        <label for="filter_${key}">${fullEquipmentData[key].title}</label>
    `;
    filterGrid.appendChild(wrapper);
    document.getElementById(`filter_${key}`).addEventListener('change', generateQuestions);
});

// 2. Fungsi Generate Pertanyaan Berdasarkan Pilihan
function generateQuestions() {
    questionsArea.innerHTML = '';
    const selectedKeys = Array.from(document.querySelectorAll('#filterGrid input:checked')).map(i => i.value);

    selectedKeys.forEach(key => {
        const data = fullEquipmentData[key];
        const section = document.createElement('div');
        section.className = 'form-card';
        
        let html = `<div class="category-title">${data.title}</div>`;
        
        data.items.forEach(item => {
            let scaleHtml = `<div class="scale-row"><span class="extreme-label">Sangat Kurang</span>`;
            for(let i=1; i<=10; i++) {
                scaleHtml += `
                    <div class="scale-option">
                        <span class="scale-num">${i}</span>
                        <input type="radio" name="${key}_${item.replace(/\s/g,'')}" value="${i}" required>
                    </div>`;
            }
            scaleHtml += `<span class="extreme-label">Sangat Baik</span></div>`;

            html += `
                <div style="margin-bottom: 30px;">
                    <label style="font-weight:500;">Sejauh mana anda memahami fungsi dan prinsip kerja <b>${item}</b>? *</label>
                    ${scaleHtml}
                </div>`;
        });
        
        section.innerHTML = html;
        questionsArea.appendChild(section);
    });
}

// 3. Handle Submit
document.getElementById('mainAssessmentForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('emp_name').value;
    alert(`Terima kasih! Penilaian untuk ${name} telah berhasil direkam.`);
};
