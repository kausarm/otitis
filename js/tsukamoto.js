// class FuzzyTsukamoto {
//   constructor(g1, g2, g3) {
//     this.g1_rendah = parseInt(g1);
//     this.g1_tinggi = parseInt(g1);
//     this.g2_rendah = parseInt(g2);
//     this.g2_tinggi = parseInt(g2);
//     this.g3_rendah = parseInt(g3);
//     this.g3_tinggi = parseInt(g3);
//     this.hasil = parseInt(this.hasil);
//     this.a_predikat1 = parseInt(this.a_predikat1);
//     this.a_predikat2 = parseInt(this.a_predikat2);
//     this.z1 = parseInt(this.z1);
//     this.z2 = parseInt(this.z2);
//     this.zTotal = parseInt(this.zTotal);
//     this.z = parseInt(this.z);
//     this.a_pred_z = parseInt(this.a_pred_z);
//   }

//   fuzzifikasiG1(g1) {
//     if (g1 <= 30) {
//       this.g1_rendah = 1;
//       this.g1_tinggi = 0;
//     } else if (30 <= g1 && g1 <= 60) {
//       this.g1_rendah = (60 - g1) / (60 - 30);
//       this.g1_tinggi = (g1 - 30) / (60 - 30);
//     } else {
//       this.g1_rendah = 0;
//       this.g1_tinggi = 1;
//     }
//     alert(`${this.g1_rendah}`);
//     alert(`${this.g1_tinggi}`);
//     // System.out.println("derajat keanggotaan Gejala Pertama(Tinggi) : " + g1_tinggi);
//     // System.out.println("derajat keanggotaan Gejala Pertama(Rendah : " + g1_rendah);
//   }

//   fuzzifikasiG2(g2) {
//     if (g2 <= 30) {
//       this.g2_rendah = 1;
//       this.g2_tinggi = 0;
//     } else if (g2 >= 30 && g2 <= 60) {
//       this.g2_rendah = (60 - g2) / (60 - 30);
//       this.g2_tinggi = (g2 - 30) / (60 - 30);
//     } else {
//       this.g2_rendah = 0;
//       this.g2_tinggi = 1;
//     }
//     alert(`${this.g2_rendah}`);
//     alert(`${this.g2_tinggi}`);
//     // System.out.println("derajat keanggotaan Gejala ke-2(rendah) : " + g2_rendah);
//     // System.out.println("derajat keanggotaan Gejala ke-2(tinggi) : " + g2_tinggi);
//   }

//   fuzzifikasiG3(g3) {
//     if (g3 <= 30) {
//       this.g3_rendah = 1;
//       //   alert(this.g3_rendah);
//       this.g3_tinggi = 0;
//       //   alert(this.g3_tinggi);
//     } else if (g3 >= 30 && g3 <= 60) {
//       this.g3_rendah = (60 - g3) / (60 - 30);
//       //   alert(this.g3_rendah);
//       this.g3_tinggi = (g3 - 30) / (60 - 30);
//       //   alert(this.g3_tinggi);
//     } else {
//       this.g3_rendah = 0;
//       //   alert(this.g3_rendah);
//       this.g3_tinggi = 1;
//       //   alert(this.g3_tinggi);
//     }
//     alert(`${this.g3_rendah}`);
//     alert(`${this.g3_tinggi}`);
//     // System.out.println("derajat keanggotaan Gejala ke-3(rendah) : " + g3_rendah);
//     // System.out.println("derajat keanggotaan Gejala ke-3(tinggi) : " + g3_tinggi);
//   }

//   mesinInferensiTsukamoto() {
//     {
//       // IF g1 rendah dan g2 Rendah dan g3 rendah then diagnosa negatif
//       this.a_predikat1 = Math.min(this.g1_rendah, this.g2_rendah);
//       let tes = Math.min(this.a_predikat1, this.g3_rendah);
//       this.z1 = 60 - tes * (60 - 30);
//         alert(this.z1);

//       // System.out.println("a predikat 1 : " + a_predikat1 + " | " + "z1 : " + z1);

//       //IF g1 tinggi dan g2 tinggi dan g3 tinggi then diagnosa positif
//       this.a_predikat2 = Math.min(this.g3_tinggi, this.g2_tinggi);
//       let tes2 = Math.min(this.a_predikat2, this.g1_tinggi);
//       this.z2 = 60 - tes2 * (60 - 30);
//         alert(this.z2);
//       // System.out.println("a predikat 2 : " + this.a_predikat2 + " | " + "z2 : " + z2);
//     }
//   }

//   defuzzifikasi() {
//     this.a_pred_z = this.a_predikat1 * this.z1 + this.a_predikat2 * this.z2;
//     this.z = this.a_predikat1 + this.a_predikat2;
//     this.zTotal = this.a_pred_z / this.z;
//     alert(this.zTotal);
//     // System.out.println("Output Fuzzy berupa hasil diagnosa : "+zTotal);
//     if (this.zTotal <= 30) {
//       document.getElementById("diagnose-type").append("Negatif");
//     } else {
//       document.getElementById("diagnose-type").append("Positif");
//     }
//   }
// }

// function diagnose() {
//   const x1 = document.querySelector("#g1value").value;
//   const x2 = document.querySelector("#g2value").value;
//   const x3 = document.querySelector("#g3value").value;

//   const fuzzyTsukamoto = new FuzzyTsukamoto(
//     parseInt(x1),
//     parseInt(x2),
//     parseInt(x3)
//   );
//   // double g1 = 58; double g2=55; double g3=40;
//   // System.out.println("========== INPUT FUZZY ==========");
//   //   alert("Gejala 1 : " + x1);
//   //   alert("Gejala 2  : " + x2);
//   //   alert("Gejala 3  : " + x3);
//   // alert("========== FUZZIFIKASI KECEPATAN ==========");
//   fuzzyTsukamoto.fuzzifikasiG1(parseInt(x1));
//   fuzzyTsukamoto.fuzzifikasiG2(parseInt(x2));
//   fuzzyTsukamoto.fuzzifikasiG3(parseInt(x3));
//   fuzzyTsukamoto.mesinInferensiTsukamoto();
//   fuzzyTsukamoto.defuzzifikasi();
// }

// const button = document.querySelector("#btn");
// button.onclick = (e) => {
//   diagnose();
//   e.preventDefault();
//   e.stopPropagation();
// };
