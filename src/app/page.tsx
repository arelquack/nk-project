import supabase from '@/utils/supabaseClient';

export default async function Home() {
  const { data: anggota, error } = await supabase.from('anggota').select('*');

  if (error) {
    console.error('Error fetching data:', error.message);
    return <p>Error: {error.message}</p>;
  }

  if (!anggota || anggota.length === 0) {
    return <p>Tidak ada data anggota.</p>;
  }

  return (
    <div>
      <h1>Daftar Anggota</h1>
      <ul>
        {anggota.map((a) => (
          <li key={a.id}>{a.nama} - {a.jabatan}</li>
        ))}
      </ul>
    </div>
  );
}
