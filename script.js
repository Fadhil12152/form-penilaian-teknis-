const data = {
  "Westrace MK I": ["HVLM","VPIM","VROM","SOF","NCDC","LCP"],
  "MIS 801": ["ZRE","ZRI","RE","RI","R"],
  "SIL-02": ["PLC","Remote I/O","Relay"],
  "VPI": ["CPU","VRD","DI"]
};

const qBox = document.getElementById("questions");

document.querySelectorAll(".eq").forEach(c =>
  c.addEventListener("change", render)
);

function render() {
  qBox.innerHTML = "";
  document.querySelectorAll(".eq:checked").forEach(c => {
    const eq = c.value;
    const h = document.createElement("h3");
    h.textContent = eq;
    qBox.appendChild(h);

    data[eq].forEach(m => {
      const d = document.createElement("div");
      d.className = "rating";
      d.innerHTML = `
        <label>${m}</label>
        <div class="scale">
          ${[1,2,3,4,5,6,7,8,9,10].map(n =>
            `<label><input type="radio" name="${eq}_${m}" value="${n}">${n}</label>`
          ).join("")}
        </div>
      `;
      qBox.appendChild(d);
    });
  });
}

document.getElementById("formEvaluasi").addEventListener("submit", e => {
  e.preventDefault();

  const fd = new FormData(e.target);
  const rows = [];
  fd.forEach((v,k)=>rows.push(`${k},${v}`));

  document.querySelectorAll("input[type=radio]:checked").forEach(r=>{
    rows.push(`${r.name},${r.value}`);
  });

  const csv = "data:text/csv;charset=utf-8," + rows.join("\n");
  const a = document.createElement("a");
  a.href = encodeURI(csv);
  a.download = "hasil_evaluasi_pegawai.csv";
  a.click();
});
