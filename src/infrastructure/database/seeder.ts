import { PostType } from "../../generated/prisma/index.js";
import prismaClient from "./prismaClient.js";

const prisma = prismaClient;

async function main() {
  await prisma.post.createMany({
    data: [
      {
        id: "data-id-1",
        title: "Sekolah Berjaya Menang Olimpiade Sains Nasional",
        description:
          "Tim sains sekolah berhasil meraih juara 1 pada ajang Olimpiade Sains Nasional tingkat provinsi. Prestasi ini menjadi kebanggaan bagi seluruh warga sekolah.",
        image: "https://picsum.photos/seed/picsum/400/200",
        type: PostType.achievement,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "data-id-2",
        title: "Pengumuman Libur Akhir Semester",
        description:
          "Kepada seluruh siswa dan guru, kegiatan belajar mengajar akan diliburkan mulai tanggal 20 Desember hingga 3 Januari mendatang.",
        image: null,
        type: PostType.news,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "data-id-3",
        title: "Guru Berprestasi Dapat Penghargaan dari Dinas Pendidikan",
        description:
          "Bapak Ahmad, guru matematika, menerima penghargaan sebagai guru berprestasi tingkat kota atas dedikasi dan inovasinya dalam pembelajaran.",
        image: "https://picsum.photos/seed/picsum/400/200",
        type: PostType.achievement,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "data-id-4",
        title: "Jadwal Ujian Tengah Semester",
        description:
          "Pelaksanaan Ujian Tengah Semester (UTS) akan dimulai pada tanggal 10 Oktober. Siswa diharapkan mempersiapkan diri dengan baik.",
        image: null,
        type: PostType.news,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });

  console.log("✅ Posts seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
