// Data ITCS-MS (Wajib - Grid 5 Pilihan sesuai Gambar)
const itcsItems = [
    "Perawatan PDSM", "Perawatan Peraga Sinyal Mekanik", "Perawatan Wesel Mekanik",
    "Negative Check Persinyalan Mekanik", "Perawatan Saluran Kawat", "Perawatan Wesel Elektrik",
    "Perawatan PDSE", "Perawatan Peraga Sinyal Elektrik", "Perawatan Axle Counter",
    "Perawatan Track Circuit", "Perawatan Location Case", "Perawatan Pointlock/Perintang/Pelalau",
    "Perawatan WLSE", "Perawatan Kontak Deteksi", "Perawatan Pintu Perlintasan",
    "Perawatan Catu Daya", "Perawatan Radio Lokomotif", "Peralatan Telkom di Stasiun",
    "Peralatan Telkom di Luar Stasiun", "Peralatan Telkom di Pintu Perlintasan",
    "Perawatan Serat Optik", "Perawatan Saluran Blok 1 & 6 bln", "Uji Fungsi LBD",
    "Perawatan Bangunan E-House", "Perawatan Trafo Kering", "Trafo Location Case & Trafo Tiang",
    "Perawatan Lightning Arrester", "Pemeriksaan Kabel Outgoing", "Pengetesan Relay Proteksi DC"
];

const additionalEquip = {
    "westrace_mk1": {
        title: "(II.A) PDSE - Westrace MK I",
        items: ["modul HVLM", "modul VPIM", "modul Vrom", "modul SOF", "modul NCDC", "modul LCP", "pin terminal di ER"]
    },
    "mis801": {
        title: "(II.B) PDSE - MIS 801",
        items: ["modul ZRE", "modul ZRI", "modul RE", "modul RI", "modul R", "modul SWH", "modul SWHW", "modul SWZH", "modul SAH", "modul SWR", "modul SWVF", "modul WF", "modul WAD", "modul DW", "modul GA", "modul FRM", "modul FRB", "modul FL", "modul SCHL", "modul LCP", "modul Data Logger", "Pin terminal di ER"]
    },
    "sil02": {
        title: "(II.C) PDSE - SIL 02",
        items: ["modul PLC", "modul Remote I/O", "modul I/O Logic", "modul Relay", "Pin Terminal di ER", "modul Data Logger", "modul LCP"]
    },
    "sil02_nextg": {
        title: "(II.D) PDSE - SIL 02 Next G",
        items: ["modul X-SB01", "modul X CPU", "modul X COM", "modul X-DI", "modul X-DO", "modul Himatrix FI DI", "modul Himatrix F2 DO", "modul Himatrix F3O", "modul Himatrix F3 DIO", "modul Relay", "modul LCP/VDU", "Pin terminal di ER", "modul Data Logger"]
    },
    "vpi_elixs_ssi": {
        title: "(II.E-G) VPI / Elixs / SSI",
        items: ["CPU/PD", "VRD", "I/O BUS", "VPM", "CPS", "MPM", "DLM", "TFM", "Technician Terminal"]
    },
    "motor_wesel": {
        title: "(III) Motor Wesel (BSG-9, S-90, NSE, T84M)",
        items: ["Komponen dalam", "Fungsi komponen", "Wiring", "Terminal pin"]
    }
};

const mandatoryArea = document.getElementById('mandatoryITCSArea');
const filterGrid = document.getElementById('filterGrid');
const dynamicWrapper = document.getElementById('dynamicQuestionsWrapper');

function generateScale10(cat, idx) {
    let html = `<div class="scale-container"><span class="extreme-label">Sangat Kurang</span>`;
    for (let i = 1; i <= 10; i++) {
        html += `<div class="scale-option"><span>${i}</span><input type="radio" name="${cat}_${idx}" value="${i}" required></div>`;
    }
    html += `<span class="extreme-label">Sangat Baik</span></div>`;
    return html;
}

// Render ITCS-MS (Wajib - Menggunakan Skala 5 sesuai Gambar e66bec)
function renderMandatory() {
    let html = `<div class="grid-5-row"><div></div><div class="grid-header">Sangat Kurang</div><div class="grid-header">Kurang</div><div class="grid-header">Cukup</div><div class="grid-header">Baik</div><div class="grid-header">Sangat Baik</div></div>`;
    itcsItems.forEach((item, idx) => {
        html += `<div class="grid-5-row"><div style="font-size:13px;">${idx+1}. ${item}</div>`;
        for (let i = 1; i <= 5; i++) {
            html += `<div style="text-align:center;"><input type="radio" name="itcs_${idx}" value="${i}" required></div>`;
        }
        html += `</div>`;
    });
    mandatoryArea.innerHTML = html;
}

// Render Checkboxes
for (let key in additionalEquip) {
    const label = document.createElement('label');
    label.className = 'checkbox-item';
    label.innerHTML = `<input type="checkbox" class="cat-filter" value="${key}"> ${additionalEquip[key].title}`;
    filterGrid.appendChild(label);
}

// Logic Tampilan Dinamis (Skala 1-10 sesuai Gambar e49a6b)
document.addEventListener('change', (e) => {
    if (e.target.classList.contains('cat-filter')) {
        dynamicWrapper.innerHTML = '';
        document.querySelectorAll('.cat-filter:checked').forEach(cb => {
            const data = additionalEquip[cb.value];
            const card = document.createElement('div');
            card.className = 'form-card';
            card.innerHTML = `<h3 class="category-title">${data.title}</h3>`;
            data.items.forEach((item, idx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'question-item';
                qDiv.innerHTML = `<label>Sejauh mana Anda memahami fungsi dan prinsip kerja <strong>${item}</strong>? *</label>${generateScale10(cb.value, idx)}`;
                card.appendChild(qDiv);
            });
            dynamicWrapper.appendChild(card);
        });
    }
});

document.getElementById('assessmentForm').onsubmit = (e) => {
    e.preventDefault();
    document.getElementById('mainFormPage').style.display = 'none';
    document.getElementById('successPage').classList.remove('hidden');
    window.scrollTo(0, 0);
};

renderMandatory();
