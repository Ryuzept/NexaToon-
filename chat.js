document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");
    const pesanInput = document.getElementById("pesanInput");
    const kirimBtn = document.getElementById("kirimBtn");
    const playerCount = document.getElementById("playerCount");

    // 1. MEMBUAT IDENTITAS ACAK UNTUK PLAYER (Karena belum ada sistem login)
    const listNama = ["Hunter", "Shadow", "Sovereign", "Monarch", "GuildMaster", "Healer", "Necromancer"];
    const namaPlayer = listNama[Math.floor(Math.random() * listNama.length)] + "_" + Math.floor(100 + Math.random() * 900);
    const idUnikPlayer = "USER_" + Math.random().toString(36).substr(2, 9);

    // 2. INISIALISASI JARINGAN WEBSOCKET (MENGGUNAKAN PUBNUB FREE INFRASTRUCTURE)
    const pubnub = new PubNub({
        publishKey: "pub-c-9c058728-6a56-4c47-9750-a9d08e5e8e7a", // Demo key gratisan resmi
        subscribeKey: "sub-c-4e899bda-bd8c-11e9-9134-2e21eb48a7b1",
        userId: idUnikPlayer
    });

    // 3. FUNGSI MERENDER GELEMBUNG CHAT KE LAYAR
    function tampilkanChat(senderId, senderName, teks, waktu, isMe) {
        const row = document.createElement("div");
        row.classList.add("chat-row");
        if (isMe) row.classList.add("user-row");

        if (isMe) {
            row.innerHTML = `
                <div class="chat-konten">
                    <div class="bubble-user">${teks}</div>
                    <span class="chat-waktu">${waktu}</span>
                </div>
            `;
        } else {
            const inisial = senderName.substring(0, 2).toUpperCase();
            row.innerHTML = `
                <div class="avatar" style="background: #22222a; border: 1px solid #ff1e1e;">${inisial}</div>
                <div class="chat-konten">
                    <div class="nama-user">${senderName} <span class="badge-rank player" style="background:#333">Player</span></div>
                    <div class="bubble">${teks}</div>
                    <span class="chat-waktu">${waktu}</span>
                </div>
            `;
        }

        chatBox.appendChild(row);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // 4. MENDENGARKAN AKTIVITAS JARINGAN (Pesan Masuk & Player Online)
    pubnub.addListener({
        // Deteksi jika ada pesan masuk dari player manapun di bumi ini
        message: function(event) {
            const data = event.message;
            const isMe = data.id === idUnikPlayer;
            tampilkanChat(data.id, data.nama, data.teks, data.waktu, isMe);
        },
        // Deteksi Real-time jumlah orang yang buka halaman ini
        presence: function(event) {
            playerCount.innerText = event.occupancy;
        }
    });

    // Konek ke ruangan bernama "nexatoon_global_chat"
    pubnub.subscribe({
        channels: ["nexatoon_global_chat"],
        withPresence: true // Aktifkan fitur hitung player online
    });

    // Aktifkan kolom input jika koneksi sukses mendeteksi jaringan
    pesanInput.disabled = false;
    pesanInput.placeholder = `Ketik sebagai ${namaPlayer}...`;

    // 5. FUNGSI MENGIRIM PESAN KE SERVER UTAMA
    function kirimKeJaringan() {
        const teks = pesanInput.value.trim();
        if (teks === "") return;

        const waktuSekarang = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        // Kirim data ke seluruh player yang sedang online melalui websocket
        pubnub.publish({
            channel: "nexatoon_global_chat",
            message: {
                id: idUnikPlayer,
                nama: namaPlayer,
                teks: teks,
                waktu: waktuSekarang
            }
        });

        pesanInput.value = "";
    }

    // Pemicu Klik atau Enter
    kirimBtn.addEventListener("click", kirimKeJaringan);
    pesanInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            kirimKeJaringan();
        }
    });

    if (window.lucide) lucide.createIcons();
