const itcsData = [
    "Perawatan PDSM", "Perawatan Peraga Sinyal Mekanik", "Perawatan Wesel Mekanik",
    "Negative Check Persinyalan Mekanik", "Perawatan Saluran Kawat", "Perawatan Wesel Elektrik",
    "Perawatan PDSE", "Perawatan Peraga Sinyal Elektrik", "Perawatan Axle Counter",
    "Perawatan Track Circuit", "Perawatan Location Case", "Perawatan Pointlock/Perintang/Pelalau",
    "Perawatan WLSE", "Perawatan Kontak Deteksi"
];

const equipmentList = {
    "westrace_mk1": { title: "(II.A) Westrace MK I", items: ["HVLM", "VPIM", "Vrom", "SOF", "NCDC", "LCP", "Pin terminal di ER"] },
    "mis_801": { title: "(II.B) MIS 801", items: ["ZRE", "ZRI", "RE", "RI", "R", "SWH", "SWHW", "SWZH", "SAH", "SWR", "SWVF", "WF", "WAD", "DW", "GA", "FRM", "FRB", "FL", "SCHL", "LCP", "Data Logger", "Pin terminal di ER"] },
    "sil_02": { title: "(II.C) SIL 02", items: ["PLC", "Remote I/O", "I/O Logic", "Relay", "Pin Terminal di ER", "Data Logger", "LCP"] },
    "sil_02_nextg": { title: "(II.D) SIL 02 Next G", items: ["X-SB01", "X CPU", "X COM", "X-DI", "X-DO", "Himatrix FI DI", "Himatrix F2 DO", "Himatrix F3O", "Himatrix F3 DIO", "Relay", "LCP/VDU", "Pin terminal di ER", "Data Logger"] },
    "vpi": { title: "(II.E) VPI", items: ["CPU/PD", "VRD", "I/O BUS", "SBO", "DI", "NVI", "NVO", "CSEX", "Relay", "LCP"] },
    "elixs": { title: "(II.F) Elixs", items: ["VPM", "CPS", "UCI", "CDU", "VIO", "Data Logger", "VDU", "Interface Relay"] },
    "ssi": { title: "(II.G) SSI", items: ["MPM", "DLM", "TFM", "Technician Terminal", "DMPM", "PPM", "LCP/VDU"] },
    "westrace_mk2": { title: "(II.H) Westrace MK II", items: ["PM", "PIM", "ROM", "LOM", "TCOM", "SOM", "RSA", "SM-MAU", "VDU"] },
    "motor_wesel": { title: "(III) Motor Wesel", items: ["BSG-9 Komponen Dalam", "BSG-9 Fungsi", "S-90 Wiring", "NSE Terminal Pin", "T84M Komponen"] },
    "sinyal": { title: "(IV) Sinyal", items: ["SIL-02 Box Sinyal", "MIS 801 Terminal", "Westrace Cheksheet"] },
    "pendeteksi": { title: "(V) Pendeteksi KA", items: ["Altpro Head Sensor", "Siemens Wde", "Frauscher AEB", "Thales Serial Board", "Track Circuit"] },
    "catu_daya": { title: "(VI) Catu Daya", items: ["Westrace UPS", "MIS 801 Genset", "SIL 02 Batere Bank"] },
    "laa": { title: "(VII) Listrik Aliran Atas", items: ["Feeding System", "Konstruksi LAA", "VCB/LBS 20KV", "HSCB", "Grounding"] },
    "perlintasan": { title: "(VIII) Pintu Perlintasan", items: ["JPL Semi Automatic Wiring", "JPL HG Barrier"] },
    "telkom": { title: "(IX) Telekomunikasi", items: ["Central Radio", "Radio Lokomotif", "Waystation", "PK GPS"] },
    "sinyal_mekanik": { title: "(X) Sinyal Mekanik", items: ["PDSM SHM/SKTM", "Sistem Blok", "Wesel Mekanik Arrow", "Saluran Kawat"] },
    "admin": { title: "(XI) Administrasi", items: ["Membuat RAB", "Nota Dinas", "SAP MM", "Alur Kontrak", "WO SRI"] },
    "lain_lain": { title: "(XII) Alat Kerja", items: ["AVO Meter", "Las Listrik", "Insulation Tester", "OTDR", "VSWR Meter", "Splicer"] }
};

const mandatoryArea = document.getElementById('mandatoryITCSArea');
const filterGrid = document.getElementById('filterGrid');
const dynamicWrapper = document.getElementById('dynamicQuestionsWrapper');

function getRadios(cat, idx) {
    let html = `<div class="scale-container"><span class="extreme-label">Sangat Kurang</span>`;
    for(let i=1; i<=10; i++) html += `<div class="scale-option"><span>${i}</span><input type="radio" name="${cat}_${idx}" value="${i}" required></div>`;
    return html + `<span class="extreme-label">Sangat Baik</span></div>`;
}

// Render ITCS-MS (Wajib)
itcsData.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.innerHTML = `<label>${idx+1}. Sejauh mana Anda memahami <strong>${item}</strong>? *</label>${getRadios('itcs', idx)}`;
    mandatoryArea.appendChild(div);
});

// Render Filter Checkboxes
for (let key in equipmentList) {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `<input type="checkbox" class="cat-filter" value="${key}"> ${equipmentList[key].title}`;
    filterGrid.appendChild(label);
}

// Logic Tampilan Dinamis
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('cat-filter')) {
        dynamicWrapper.innerHTML = '';
        document.querySelectorAll('.cat-filter:checked').forEach(cb => {
            const data = equipmentList[cb.value];
            const card = document.createElement('div');
            card.className = 'form-card';
            card.innerHTML = `<h3 class="category-title">${data.title}</h3>`;
            data.items.forEach((item, idx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'question-item';
                qDiv.innerHTML = `<label>Sejauh mana Anda memahami <strong>${item}</strong>? *</label>${getRadios(cb.value, idx)}`;
                card.appendChild(qDiv);
            });
            dynamicWrapper.appendChild(card);
        });
    }
});

document.getElementById('assessmentForm').onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('mainFormPage').classList.add('hidden');
    document.getElementById('successPage').classList.remove('hidden');
    window.scrollTo(0,0);
};
