const removeClick = (event) => {
    //削除ボタンのクリック処理
    event.currentTarget.parentNode.parentNode.remove();
}

const addClick = () => {
    if (document.getElementById("add_date").value == "") {
        alert("日付が設定されていません");
        return;
    }

    if (document.getElementById("add_text").value == "") {
        alert("内容が設定されていません");
        return;
    }

    var newRow = document.createElement("tr"); // 行TR
    var dateTd = document.createElement("td");// 期限日列
    var contentTd = document.createElement("td");// 内容列
    var removeTd = document.createElement("td");// 削除列
    var removeButton = document.createElement("input");// 削除ボタン
    removeButton.setAttribute("type", "button");
    removeButton.value = "remove";
    removeButton.onclick = removeClick;

    // TDの中身を設定
    dateTd.innerText = document.getElementById("add_date").value;
    contentTd.innerText = document.getElementById("add_text").value;
    removeTd.appendChild(removeButton);

    // TRへTDを追加
    newRow.appendChild(dateTd);
    newRow.appendChild(contentTd);
    newRow.appendChild(removeTd);
    
    document.getElementById("table_body").appendChild(newRow);

}

window.onload = () => {
    document.getElementById("add_button").onclick = addClick;
}