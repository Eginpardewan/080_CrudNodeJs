import express from "express";

// Buat instance dari express.Router
const router = express.Router();

// Data student
const students = [
    {
        id: 1,
        name: "Egin Pardewan",
        nim: "20220140080",
        major: "Kimia",
    },
    {
        id: 2,
        name: "Imam Dwi",
        nim: "20220140086",
        major: "Sejarah",
    },
    {
        id: 3,
        name: "Muhammad Fathur",
        nim: "20220140085",
        major: "Matematika",
    },
    {
        id: 4,
        name: "Tyo",
        nim: "20220140088",
        major: "Fisika",
    },
    // Tambahkan data student lain jika perlu
];

// Route GET untuk mendapatkan semua students
router.get("/", (req, res) => {
    res.json(students); // Mengirimkan data students dalam format JSON
});

// Ekspor router untuk digunakan di tempat lain
export default router;

