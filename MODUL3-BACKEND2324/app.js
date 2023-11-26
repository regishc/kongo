const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json([
    {
      id: 1,
      Provinsi: "Jawa barat",
      Kota: "Bekasi",
      Kecamatan: "Bekasi Selatan",
      Desa: "Kayuringin Jaya",
    },
    {
      id: 2,
      Provinsi: "Riau",
			Kota: "Pekanbaru",
			Kecamatan: "Marpoyan damai",
			Desa: "fsdfs",
    },
    {
      id: 3,
      Provinsi: "Jawa Barat",
			Kota: "Sukabumi",
			Kecamatan: "Sukaraja",
			Desa: "Pasirhalang",
    },
    {
      id: 4,
      Provinsi: "Jakarta",
      Kota: "Jakarta Timur",
      Kecamatan: "Duren Sawit",
      Desa: "Malaka Jaya",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
