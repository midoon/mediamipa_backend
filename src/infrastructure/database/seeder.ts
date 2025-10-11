import { PostType } from "../../generated/prisma/index.js";
import prismaClient from "./prismaClient.js";

const prisma = prismaClient;

async function main() {
  // Bersihkan data lama dulu biar gak duplikat
  await prisma.post.deleteMany();

  const now = new Date();

  // Data News
  const newsPosts = [
    {
      id: "news-1",
      title: "Pengumuman Libur Semester Ganjil",
      description:
        "Sekolah akan meliburkan kegiatan belajar mengajar mulai tanggal 20 Desember hingga 3 Januari mendatang.",
      image: "https://picsum.photos/seed/news1/400/200",
      type: PostType.news,
      created_at: now,
      updated_at: now,
    },
    {
      id: "news-2",
      title: "Penerimaan Siswa Baru Tahun Ajaran 2025/2026",
      description:
        "Pendaftaran siswa baru telah dibuka mulai 10 Juni hingga 30 Juni. Calon siswa dapat mendaftar melalui website resmi sekolah.",
      image: "https://picsum.photos/seed/news2/400/200",
      type: PostType.news,
      created_at: now,
      updated_at: now,
    },
    {
      id: "news-3",
      title: "Kegiatan Bakti Sosial Sekolah",
      description:
        "Sekolah mengadakan kegiatan bakti sosial di panti asuhan sebagai bentuk kepedulian terhadap sesama.",
      image: "https://picsum.photos/seed/news3/400/200",
      type: PostType.news,
      created_at: now,
      updated_at: now,
    },
    {
      id: "news-4",
      title: "Ujian Akhir Semester Akan Dimulai",
      description:
        "Ujian akhir semester akan dilaksanakan mulai tanggal 5 Desember. Siswa diharapkan mempersiapkan diri sebaik mungkin.",
      image: "https://picsum.photos/seed/news4/400/200",
      type: PostType.news,
      created_at: now,
      updated_at: now,
    },
    {
      id: "news-5",
      title: "Pentas Seni dan Budaya Sekolah",
      description:
        "Kegiatan pentas seni akan menampilkan berbagai pertunjukan dari siswa dan guru untuk menutup tahun ajaran.",
      image: "https://picsum.photos/seed/news5/400/200",
      type: PostType.news,
      created_at: now,
      updated_at: now,
    },
  ];

  // Data Achievements
  const achievementPosts = [
    {
      id: "achv-1",
      title: "Sekolah Berjaya Menang Olimpiade Sains Nasional",
      description:
        "Tim sains sekolah berhasil meraih juara 1 pada ajang Olimpiade Sains Nasional tingkat provinsi.",
      image: "https://picsum.photos/seed/achv1/400/200",
      type: PostType.achievement,
      created_at: now,
      updated_at: now,
    },
    {
      id: "achv-2",
      title: "Siswa Berprestasi Mendapat Beasiswa Nasional",
      description:
        "Salah satu siswa sekolah mendapatkan beasiswa nasional karena prestasi akademik yang luar biasa.",
      image: "https://picsum.photos/seed/achv2/400/200",
      type: PostType.achievement,
      created_at: now,
      updated_at: now,
    },
    {
      id: "achv-3",
      title: "Guru Berprestasi Dapat Penghargaan dari Dinas Pendidikan",
      description:
        "Guru matematika menerima penghargaan sebagai guru berprestasi tingkat kota atas dedikasinya.",
      image: "https://picsum.photos/seed/achv3/400/200",
      type: PostType.achievement,
      created_at: now,
      updated_at: now,
    },
    {
      id: "achv-4",
      title: "Tim Basket Sekolah Menang Turnamen Antar Sekolah",
      description:
        "Tim basket sekolah berhasil menjadi juara 1 pada kompetisi antar sekolah se-kota.",
      image: "https://picsum.photos/seed/achv4/400/200",
      type: PostType.achievement,
      created_at: now,
      updated_at: now,
    },
    {
      id: "achv-5",
      title: "Siswa Kelas 9 Juara Lomba Menulis Esai Nasional",
      description:
        "Salah satu siswa berhasil menjadi juara 1 lomba menulis esai tingkat nasional dengan tema lingkungan.",
      image: "https://picsum.photos/seed/achv5/400/200",
      type: PostType.achievement,
      created_at: now,
      updated_at: now,
    },
  ];

  await prisma.post.createMany({
    data: [...newsPosts, ...achievementPosts],
  });

  console.log("✅ Posts (News & Achievements) seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
