class FuzzyTsukamoto {
  constructor(g1, g2, g3) {
    this.g1_rendah = parseInt(g1);
    this.g1_tinggi = parseInt(g1);
    this.g2_rendah = parseInt(g2);
    this.g2_tinggi = parseInt(g2);
    this.g3_rendah = parseInt(g3);
    this.g3_tinggi = parseInt(g3);
    this.hasil = parseInt(this.hasil);
    this.a_predikat1 = parseInt(this.a_predikat1);
    this.a_predikat2 = parseInt(this.a_predikat2);
    this.z1 = parseInt(this.z1);
    this.z2 = parseInt(this.z2);
    this.zTotal = parseInt(this.zTotal);
    this.z = parseInt(this.z);
    this.a_pred_z = parseInt(this.a_pred_z);
  }

  fuzzifikasiG1(g1) {
    if (g1 <= 30) {
      this.g1_rendah = 1;
      this.g1_tinggi = 0;
    } else if (30 <= g1 && g1 <= 60) {
      this.g1_rendah = (60 - g1) / (60 - 30);
      this.g1_tinggi = (g1 - 30) / (60 - 30);
    } else {
      this.g1_rendah = 0;
      this.g1_tinggi = 1;
    }
    // alert(`G1 Rendah:${this.g1_rendah.toFixed(3)}`);
    // alert(`G1 Tinggi:${this.g1_tinggi.toFixed(3)}`);
    
  }

  fuzzifikasiG2(g2) {
    if (g2 <= 30) {
      this.g2_rendah = 1;
      this.g2_tinggi = 0;
    } else if (g2 >= 30 && g2 <= 60) {
      this.g2_rendah = (60 - g2) / (60 - 30);
      this.g2_tinggi = (g2 - 30) / (60 - 30);
    } else {
      this.g2_rendah = 0;
      this.g2_tinggi = 1;
    }
    // alert(`G2 Rendah:${this.g2_rendah.toFixed(3)}`);
    // alert(`G2 Tinggi:${this.g2_tinggi.toFixed(3)}`);
    
  }

  fuzzifikasiG3(g3) {
    if (g3 <= 30) {
      this.g3_rendah = 1;
      //   alert(this.g3_rendah);
      this.g3_tinggi = 0;
      //   alert(this.g3_tinggi);
    } else if (g3 >= 30 && g3 <= 60) {
      this.g3_rendah = (60 - g3) / (60 - 30);
      //   alert(this.g3_rendah);
      this.g3_tinggi = (g3 - 30) / (60 - 30);
      //   alert(this.g3_tinggi);
    } else {
      this.g3_rendah = 0;
      //   alert(this.g3_rendah);
      this.g3_tinggi = 1;
      //   alert(this.g3_tinggi);
    }
    // alert(`G3 Rendah:${this.g3_rendah.toFixed(3)}`);
    // alert(`G3 Tinggi:${this.g3_tinggi.toFixed(3)}`);
    
  }

  mesinInferensiTsukamoto() {
    {
      // IF g1 rendah dan g2 Rendah dan g3 rendah then diagnosa negatif
      this.a_predikat1 = Math.min(this.g1_rendah, this.g2_rendah);
      let tes = Math.min(this.a_predikat1, this.g3_rendah);
      this.z1 = 60 - tes * (60 - 30);
    //   alert(this.z1.toFixed(3));

      

      //IF g1 tinggi dan g2 tinggi dan g3 tinggi then diagnosa positif
      this.a_predikat2 = Math.min(this.g3_tinggi, this.g2_tinggi);
      let tes2 = Math.min(this.a_predikat2, this.g1_tinggi);
      this.z2 = 60 - tes2 * (60 - 30);
    //   alert(this.z2.toFixed(3));
      
    }
  }

  defuzzifikasi() {
    let defusi = document.querySelector("#defuzi");
    let nama = document.querySelector("#pasien").value;
    this.a_pred_z = this.a_predikat1 * this.z1 + this.a_predikat2 * this.z2;
    this.z = this.a_predikat1 + this.a_predikat2;
    this.zTotal = this.a_pred_z / this.z;
    let output = this.zTotal.toFixed(2);
    // alert(this.zTotal);
    defusi.append(`Nilai Defuzzifikasi: ${output}`);
    if (this.zTotal <= 30) {
      document.getElementById("diagnose-type")
      .append(`Pasien dengan nama ${nama} Negatif Otitis`);
    } else {
      document
        .getElementById("diagnose-type")
        .append(`Pasien dengan nama ${nama} Positif Otitis`);
    }
  }
}

function diagnose() {

    const animate = document.querySelector("#show");
    animate.classList.toggle("animate");
    
  const x1 = document.querySelector("#g1value").value;
  const x2 = document.querySelector("#g2value").value;
  const x3 = document.querySelector("#g3value").value;

  const fuzzyTsukamoto = new FuzzyTsukamoto(
    parseInt(x1),
    parseInt(x2),
    parseInt(x3)
  );
  // double g1 = 58; double g2=55; double g3=40;
  fuzzyTsukamoto.fuzzifikasiG1(parseInt(x1));
  fuzzyTsukamoto.fuzzifikasiG2(parseInt(x2));
  fuzzyTsukamoto.fuzzifikasiG3(parseInt(x3));
  fuzzyTsukamoto.mesinInferensiTsukamoto();
  fuzzyTsukamoto.defuzzifikasi();
}

const button = document.querySelector("#btn");
button.onclick = (e) => {
  diagnose();
  e.preventDefault();
  e.stopPropagation();
};

// 3 AND 5