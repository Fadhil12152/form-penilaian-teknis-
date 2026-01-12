// Data berdasarkan isi dokumen penilaian teknis 
const techModules = {
    "westrace-mk1": {
        category: "PDSE - Westrace MK I",
        items: ["HVLM", "Vpim", "Vrom", "SOF", "NCDC", "LCP", "Pin terminal di ER"]
    },
    "mis-801": {
        category: "PDSE - MIS 801",
        items: ["ZRE", "ZRI", "RE", "RI", "R", "SWH", "SWHW", "SWZH", "SAH", "SWR", "SWVF", "WF", "WAD", "DW", "GA", "Data Logger"]
    },
    "motor-wesel": {
        category: "Motor Wesel",
        items: ["Komponen dalam BSG-9", "Fungsi komponen BSG-9", "Wiring BSG-9", "Terminal pin BSG-9"]
    },
    "catu-daya": {
        category: "Catu Daya",
        items: ["UPS", "Genset", "Batere Bank", "Distribution Panel"]
    }
};

const categorySelection = document.getElementById('categorySelection');
const questionsContainer = document.getElementById('questionsContainer');
const generateBtn = document.getElementById('generateBtn');
const assessmentForm = document.getElementById('assessmentForm');

// Inisialisasi daftar pilihan
function init() {
    for (const key in techModules) {
        const div = document.createElement('div');
        div.innerHTML = `
            <input type="checkbox" id="chk_${key}" value="${key}">
            <label for="chk_${key}">${techModules[key].category}</label>
        `;
        categorySelection.appendChild(div);
    }
}

generateBtn.addEventListener('click', () => {
    const selected = Array.from(document.querySelectorAll('#categorySelection input:checked'))
                          .map(cb => cb.value);

    if (selected.length === 0) {
        alert("Silahkan pilih kategori peralatan terlebih dahulu.");
        return;
    }

    questionsContainer.innerHTML = ''; 
    
    selected.forEach(catKey => {
        const group = techModules[catKey];
        const groupTitle = document.createElement('h2');
        groupTitle.innerText = group.category;
        questionsContainer.appendChild(groupTitle);

        group.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'question-card';
            
            let radioButtons = '';
            for (let i = 1; i <= 10; i++) {
                radioButtons += `
                    <div class="radio-item">
                        <label class="label-text">${i}</label>
                        <input type="radio" name="val_${item.replace(/\s/g, '')}" value="${i}" required>
                    </div>
                `;
            }

            card.innerHTML = `
                <span class="question-text">Sejauh mana anda memahami fungsi dan prinsip kerja modul ${item} *</span>
                <div class="scale-container">
                    <div class="radio-group">${radioButtons}</div>
                    <div class="extremes">
                        <span>Sangat Kurang</span>
                        <span>Sangat Baik</span>
                    </div>
                </div>
            `;
            questionsContainer.appendChild(card);
        });
    });

    assessmentForm.classList.remove('hidden');
    assessmentForm.scrollIntoView({ behavior: 'smooth' });
});

assessmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Data Penilaian Teknis Wiharjo telah berhasil disusun!");
});

init();
