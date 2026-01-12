// Data ITCS-MS (Wajib di Awal) 
const mandatoryITCSItems = [
    "Perawatan PDSM", "Perawatan Peraga Sinyal Mekanik", "Perawatan Wesel Mekanik",
    "Negative Check Persinyalan Mekanik", "Perawatan Saluran Kawat", "Perawatan Wesel Elektrik",
    "Perawatan PDSE", "Perawatan Peraga Sinyal Elektrik", "Perawatan Axle Counter",
    "Perawatan Track Circuit", "Perawatan Location Case", "Perawatan Pointlock/Perintang/Pelalau",
    "Perawatan WLSE", "Perawatan Kontak Deteksi"
];

// Data Peralatan Tambahan (Filter) 
const additionalData = {
    "westrace": {
        title: "PDSE - Westrace MK I",
        items: ["HVLM", "VPIM", "VROM", "SOF", "NCDC", "LCP", "Pin Terminal di ER"]
    },
    "mis801": {
        title: "PDSE - MIS 801",
        items: ["ZRE", "ZRI", "RE", "RI", "R", "SWH", "SWHW", "Data Logger"]
    },
    "motor_wesel": {
        title: "Motor Wesel",
        items: ["Komponen Dalam BSG-9", "Komponen Dalam S-90", "Wiring Wesel", "Terminal Pin"]
    },
    "telekomunikasi": {
        title: "Telekomunikasi",
        items: ["Radio Lokomotif", "Peralatan di Stasiun", "Peralatan di Luar Stasiun", "Serat Optik"]
    }
};

const itcsContainer = document.getElementById('mandatoryITCS');
const filterArea = document.getElementById('filterArea');
const dynamicQuestions = document.getElementById('dynamicQuestionsWrapper');

// 1. Render ITCS-MS (Wajib di Awal)
function initMandatory() {
    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `<div class="category-title">(I) ITCS-MS (Memahami SOP perawatan sesuai ITCS-MS) *</div>`;
    
    mandatoryITCSItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.marginBottom = "25px";
        div.innerHTML = `
            <label style="font-size: 0.95em;">${index + 1}. ${item} *</label>
            <div class="scale-container">
                <span class="extreme-label">Sangat Kurang</span>
                ${generateScale('itcs', index)}
                <span class="extreme-label">Sangat Baik</span>
            </div>
        `;
        card.appendChild(div);
    });
    itcsContainer.appendChild(card);
}

// 2. Render Checkbox Filter
function initFilter() {
    for (let key in additionalData) {
        const div = document.createElement('div');
        div.innerHTML = `<label><input type="checkbox" class="cat-filter" value="${key}"> ${additionalData[key].title}</label>`;
        filterArea.appendChild(div);
    }
}

function generateScale(cat, idx) {
    let radios = '';
    for (let i = 1; i <= 10; i++) {
        radios += `
            <div class="scale-option">
                <span class="scale-num">${i}</span>
                <input type="radio" name="${cat}_${idx}" value="${i}" required>
            </div>`;
    }
    return radios;
}

// 3. Render Pertanyaan Dinamis
document.addEventListener('change', function(e) {
    if (e.target.classList.contains('cat-filter')) {
        renderDynamic();
    }
});

function renderDynamic() {
    dynamicQuestions.innerHTML = '';
    const selected = document.querySelectorAll('.cat-filter:checked');

    selected.forEach(cb => {
        const data = additionalData[cb.value];
        const card = document.createElement('div');
        card.className = 'form-card';
        card.innerHTML = `<div class="category-title">${data.title}</div>`;

        data.items.forEach((item, index) => {
            const div = document.createElement('div');
            div.style.marginBottom = "25px";
            div.innerHTML = `
                <label style="font-size: 0.95em;">Sejauh mana anda memahami ${item}? *</label>
                <div class="scale-container">
                    <span class="extreme-label">Sangat Kurang</span>
                    ${generateScale(cb.value, index)}
                    <span class="extreme-label">Sangat Baik</span>
                </div>
            `;
            card.appendChild(div);
        });
        dynamicQuestions.appendChild(card);
    });
}

// 4. Handle Submit & Halaman Sukses
document.getElementById('assessmentForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('mainFormContainer').classList.add('hidden');
    document.getElementById('successPage').classList.remove('hidden');
    window.scrollTo(0, 0);
};

initMandatory();
initFilter();
