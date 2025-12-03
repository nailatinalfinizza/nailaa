function saveDiary() {
    const text = document.getElementById("diaryText").value;
    
    if (text.trim() === "") {
        alert("Catatan tidak boleh kosong!");
        return;
    }

    const list = document.getElementById("diaryList");

    const li = document.createElement("li");
    const date = new Date().toLocaleString("id-ID");

    li.innerHTML = `<strong>${date}</strong><br>${text}`;
    list.prepend(li); // ditambahkan ke atas

    document.getElementById("diaryText").value = "";
}
