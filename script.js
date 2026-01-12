// 1. DATA WAJIB (ITCS-MS) - 29 Pertanyaan 
const mandatoryITCS = [
    "Perawatan PDSM", "Perawatan Peraga Sinyal Mekanik", "Perawatan Wesel Mekanik",
    "Negative Check Persinyalan Mekanik", "Perawatan Saluran Kawat", "Perawatan Wesel Elektrik",
    "Perawatan PDSE", "Perawatan Peraga Sinyal Elektrik", "Perawatan Axle Counter",
    "Perawatan Track Circuit", "Perawatan Location Case", "Perawatan Pointlock/Perintang/Pelalau",
    "Perawatan WLSE", "Perawatan Kontak Deteksi", "Perawatan Pintu Perlintasan",
    "Perawatan Catu Daya", "Perawatan Radio Lokomotif", "Peralatan Telkom di Stasiun",
    "Peralatan Telkom di Luar Stasiun", "Peralatan Telkom di Pintu Perlintasan",
    "Perawatan Serat Optik", "Perawatan Saluran Blok (1 & 6 bln)", "Uji Fungsi LBD",
    "Perawatan Bangunan E-House", "Perawatan Trafo Kering", "Trafo Location Case/Tiang",
    "Perawatan Lightning Arrester", "Pemeriksaan Kabel Outgoing", "Pengetesan Relay Proteksi DC"
];

// 2. DATA TAMBAHAN (Sesuai Struktur Dokumen) 
const additionalEquip = {
    "pdse_westrace_1": {
        title: "(II.A) PDSE - Westrace MK I",
        items: ["Modul HVLM", "Modul Vpim", "Modul Vrom", "Modul SOF", "Modul NCDC", "Modul LCP", "Pin terminal di ER"]
    },
    "pdse_mis801": {
        title: "(II.B) PDSE - MIS 801",
        items: ["Modul ZRE", "Modul ZRI", "Modul RE", "Modul RI", "Modul R", "Modul SWH", "Modul SWHW", "Modul Data Logger", "Modul LCP"]
    },
    "pdse_sil02": {
        title: "(II.C) PDSE - SIL 02",
        items: ["Modul PLC", "Remote I/O", "I/O Logic", "Relay", "Pin terminal di ER", "Data Logger", "LCP"]
    },
    "pdse_sil02_nextg": {
        title: "(II.D) PDSE - SIL 02 Next G",
        items: ["Modul X-SB01", "Modul X-CPU", "Modul X-COM", "Modul X-DI", "Modul X-DO", "Himatrix F1/F2/F3", "LCP/VDU", "Data Logger"]
    },
    "pdse_vpi": {
        title: "(II.E/F) PDSE - VPI / ELIXS",
        items: ["CPU/PD", "VRD", "I/O Bus", "SBO", "VPM", "CPS", "UCI", "Data Logger", "VDU"]
    },
    "motor_wesel": {
        title: "(III) Motor Wesel",
        items: ["BSG-9 (Komponen & Wiring)", "S-90 (Komponen & Wiring)", "NSE (Komponen & Wiring)", "T84M (Komponen & Wiring)"]
    },
    "sinyal": {
        title: "(IV) Sinyal",
        items: ["Sil-02 (Box Sinyal & Terminal)", "MIS-801 (Box Sinyal & Terminal)", "Westrace (Box Sinyal & Terminal)"]
    },
    "detect": {
        title: "(V) Pendeteksi KA",
        items: ["Altpro (Head Sensor, MPU, Zanap)", "Siemens (Wde, Generator, Steu)", "Frauscher (Wheel Sensor, GAK, AEB)", "Thales (EAK, CPU, Power Supply)", "Track Circuit"]
    },
    "catu_daya": {
        title: "(VI) Catu Daya",
        items: ["WESTRACE (UPS, Genset, Batere)", "MIS 801 (UPS, Genset, Batere)", "SIL 02 (UPS, Genset, Batere)"]
    },
    "admin": {
        title: "(XI) Administrasi",
        items: ["Membuat RAB", "Membuat Nota Dinas", "SAP MM / SAP-LAM", "Membuat/MenTeco WO", "Pelaporan SRI"]
    }
};

const mandatoryArea = document.getElementById('mandatoryITCSArea');
const filterGrid = document.getElementById('filterGrid');
const dynamicWrapper = document.getElementById('dynamicQuestionsWrapper');

// Render Fungsi Skala 1-10
function generateRadios(cat, qIdx) {
    let radios = '';
    for (let i = 1; i <= 10; i++) {
        radios += `<div class="scale-option"><span>${i}</span><input type="radio" name="${cat}_${qIdx}" value="${i}" required></div>`;
    }
    return radios;
}

// 1. Render ITCS-MS (Wajib)
mandatoryITCS.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `
        <label>${idx + 1}. Memahami prosedur: <strong>${item}</strong>? *</label>
        <div class="scale-container">
            <span class="extreme-label">Sangat Kurang</span>
            ${generateRadios('itcs', idx)}
            <span class="extreme-label">Sangat Baik</span>
        </div>
    `;
    mandatoryArea.appendChild(div);
});

// 2. Render Filter Checkbox
for (let key in additionalEquip) {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `<input type="checkbox" class="cat-filter" value="${key}"> ${additionalEquip[key].title}`;
    filterGrid.appendChild(label);
}

// 3. Render Dynamic Questions
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('cat-filter')) {
        dynamicWrapper.innerHTML = '';
        const selected = document.querySelectorAll('.cat-filter:checked');
        selected.forEach(cb => {
            const data = additionalEquip[cb.value];
            const card = document.createElement('div');
            card.className = 'form-card';
            card.innerHTML = `<h3 class="category-title">${data.title}</h3>`;
            data.items.forEach((item, idx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'question-item';
                qDiv.innerHTML = `<label>Pemahaman <strong>${item}</strong>: *</label>
                <div class="scale-container"><span class="extreme-label">Sangat Kurang</span>${generateRadios(cb.value, idx)}<span class="extreme-label">Sangat Baik</span></div>`;
                card.appendChild(qDiv);
            });
            dynamicWrapper.appendChild(card);
        });
    }
});

// 4. Submit Logic
document.getElementById('assessmentForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('mainFormPage').style.display = 'none';
    document.getElementById('successPage').classList.remove('hidden');
    window.scrollTo(0, 0);
};
