const dbUrl = "https://<relay-4f3b0>.firebaseio.com/relays.json"; 
// Ganti <project-id> dengan project Firebase kamu

async function toggleRelay(relay) {
  // Ambil data sekarang
  const res = await fetch(dbUrl);
  const data = await res.json();

  // Toggle nilai
  data[relay] = data[relay] === 1 ? 0 : 1;

  // Kirim balik ke Firebase
  await fetch(dbUrl, {
    method: "PUT",
    body: JSON.stringify(data)
  });

  alert(`${relay} sekarang = ${data[relay] ? "ON" : "OFF"}`);
}
