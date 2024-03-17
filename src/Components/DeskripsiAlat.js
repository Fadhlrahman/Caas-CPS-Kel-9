import React from 'react';

const DeskripsiAlat = () => {
    return (
        <div className="text-left text-dark fs-5"> {/* Mengubah warna teks menjadi hitam */}
            <p>
                IoT Smart Door Access dan Pencahayaan Otomatis adalah solusi inovatif yang menggabungkan teknologi Internet of Things (IoT) untuk memberikan akses pintu yang aman dan efisien serta mengatur pencahayaan ruangan secara otomatis.
            </p>
            <p>
                <strong>Fungsionalitas:</strong><br />
                - Akses Pintu Cerdas dengan Sensor RFID<br />
                Alat ini dilengkapi dengan sensor Radio-Frequency Identification (RFID) yang memungkinkan pengguna untuk membuka akses pintu dengan mudah dan aman.<br />
                - Pencahayaan Otomatis dengan Sensor Cahaya (LDR)<br />
                Alat ini juga dilengkapi dengan sensor Light Dependent Resistor (LDR) yang mendeteksi intensitas cahaya di sekitar pintu. Ketika pintu berhasil dibuka dan sensor LDR mendeteksi cahaya dari luar, alat secara otomatis mematikan lampu dalam ruangan.
            </p>
            <p>
                <strong>Cara Kerja:</strong><br />
                1. Membuka Akses Pintu<br />
                Ketika pengguna mendekati pintu dan ingin membukanya, mereka cukup mengarahkan tag RFID mereka ke pembaca RFID yang terpasang di dekat pintu.<br />
                2. Pengaturan Pencahayaan Otomatis<br />
                Setelah pintu berhasil dibuka, sensor LDR akan memantau intensitas cahaya di sekitar pintu. Jika terdeteksi cahaya dari luar, alat akan mematikan lampu dalam ruangan.
            </p>
            <p>
                <strong>Keuntungan:</strong><br />
                - Keamanan Tinggi<br />
                - Efisiensi Energi
            </p>
            <p>
                <strong>Kesimpulan:</strong> IoT Smart Door Access dan Pencahayaan Otomatis adalah solusi yang ideal untuk meningkatkan keamanan dan efisiensi energi dalam lingkungan rumah atau kantor. Dengan kombinasi antara akses pintu pintar berbasis RFID dan pengaturan pencahayaan otomatis, pengguna dapat merasakan kenyamanan dan kemudahan dalam mengelola akses pintu dan pencahayaan ruangan.
            </p>
        </div>
    );
}

export default DeskripsiAlat;
