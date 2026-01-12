const mandatoryITCS = [
    "Perawatan PDSM", "Perawatan Peraga Sinyal Mekanik", "Perawatan Wesel Mekanik",
    "Negative Check Persinyalan Mekanik", "Perawatan Saluran Kawat"
];

const additionalEquip = {
    "westrace": {
        title: "PDSE - Westrace MK I",
        items: ["Modul HVLM", "Modul VPIM", "Modul VROM", "Modul SOF"]
    },
    "mis801": {
        title: "PDSE - MIS 801",
        items: ["Modul ZRE", "Modul ZRI", "Modul RE", "Modul RI"]
    }
};

const mandatoryArea = document.getElementById('mandatoryITCSArea');
const filterGrid = document.getElementById('filterGrid');
const dynamicWrapper = document.getElementById('dynamicQuestionsWrapper');

// 1. Generate Skala 1-10 Wajib (ITCS-MS) 
function renderMandatory() {
    mandatoryITCS.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'question-item';
        div.innerHTML = `
            <label>${idx + 1}. Sejauh mana Anda memahami <strong>${item}</strong>? *</label>
            <div class="scale-container">
                <span class="extreme-label">Sangat Kurang</span>
                ${generateRadios('itcs', idx)}
                <span class="extreme-label">Sangat Baik</span>
            </div>
        `;
        mandatoryArea.appendChild(div);
    });
}

// 2. Generate Checkbox Filter 
function renderCheckboxes() {
    for (let key in additionalEquip) {
        const label = document.createElement('label');
        label.className = 'checkbox-item';
        label.innerHTML = `<input type="checkbox" class="cat-filter" value="${key}"> ${additionalEquip[key].title}`;
        filterGrid.appendChild(label);
    }
}

function generateRadios(cat, qIdx) {
    let radios = '';
    for (let i = 1; i <= 10; i++) {
        radios += `<div class="scale-option"><span>${i}</span><input type="radio" name="${cat}_${qIdx}" value="${i}" required></div>`;
    }
    return radios;
}

// 3. Handle Pertanyaan Dinamis 
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
                qDiv.innerHTML = `<label>Pemahaman terhadap <strong>${item}</strong>: *</label><div class="scale-container"><span class="extreme-label">Sangat Kurang</span>${generateRadios(cb.value, idx)}<span class="extreme-label">Sangat Baik</span></div>`;
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

renderMandatory();
renderCheckboxes();
