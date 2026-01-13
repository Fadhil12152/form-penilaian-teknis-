const data = {
  "Westrace MK I": ["HVLM","VPIM","VROM","SOF","NCDC","LCP","Pin terminal di ER"],
  "MIS 801": ["ZRE","ZRI","RE","RI","R","SWH","SWHW","SWZH","SAH"],
  "SIL-02": ["PLC","Remote I/O","I/O Logic","Relay","LCP"],
  "SIL-02 Next G": ["X-SB01","X-CPU","X-COM","X-DI","X-DO"],
  "VPI": ["CPU/PD","VRD","I/O BUS","SBO","DI"],
  "ELIXS": ["VPM","CPS","UCI","CDU","VIO"],
  "SSI": ["MPM","DLM","TFM","PPM"],
  "BSG-9": ["Komponen Dalam","Fungsi Komponen","Wiring","Terminal Pin"]
};

const container = document.getElementById("questions");

document.querySelectorAll(".eq").forEach(cb => {
  cb.addEventListener("change", render);
});

function render() {
  container.innerHTML = "";

  document.querySelectorAll(".eq:checked").forEach(cb => {
    const eq = cb.value;

    const title = document.createElement("h3");
    title.textContent = eq;
    container.appendChild(title);

    data[eq].forEach(m => {
      const div = document.createElement("div");
      div.className = "rating";
      div.innerHTML = `
        <label>Seberapa paham Anda terkait fungsi dan prinsip kerja <b>${m}</b></label>
        <div class="scale">
          ${[1,2,3,4,5,6,7,8,9,10].map(n =>
            `<label><input type="radio" name="${eq}_${m}" value="${n}"> ${n}</label>`
          ).join("")}
        </div>
      `;
      container.appendChild(div);
    });
  });
}
