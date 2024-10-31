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
    res.json(students); 
});

// POST Method untuk menambah data mahasiswa baru
router.post("/", (req, res) => {
    const { name, nim, major } = req.body;
    const id = students.length ? students[students.length - 1].id + 1 : 1;
    const newStudent = { id, name, nim, major };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// DELETE Method untuk menghapus data mahasiswa berdasarkan id
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = students.findIndex((s) => s.id === parseInt(id));

    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        res.json(deletedStudent[0]);
    } else {
        res.status(404).json({ message: "Student tidak ditemukan" });
    }
});

// PUT Method untuk memperbarui data mahasiswa berdasarkan id
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { name, nim, major } = req.body;
    const student = students.find((s) => s.id === parseInt(id));

    if (student) {
        student.name = name;
        student.nim = nim;
        student.major = major;
        res.json(student);
    } else {
        res.status(404).json({ message: "Student tidak ditemukan" });
    }
});


export default router;

