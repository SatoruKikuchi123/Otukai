//依頼者セレクターの要素をrequesterに代入
const requester = document.querySelector('#requester');
//品セレクターの要素をgoodsに代入
const goods = document.querySelector('#goods');
//数セレクターの要素をnumberに代入
const number = document.querySelector('#numberGoods');
//登録ボタンの要素をsubmitに代入
const submit = document.getElementsByClassName('submit')[0];
//tableタグの要素をtableに入れる
const table = document.getElementsByClassName('table')[0];


//登録ボタンをクリックし、イベントを発動（依頼者を追加）
submit.addEventListener('click', () => {

    // 選択した依頼者を追加・表示
    //セレクタの中身が入っているか確認　
    if (requester.value !== "" && goods.value !== "" && number.value !== "") {
        let table = document.getElementById('targetTable');
        let newRow = table.insertRow();

        let newCell = newRow.insertCell();
        let newText = document.createTextNode(requester.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(goods.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        newText = document.createTextNode(number.value);
        newCell.appendChild(newText);

        newCell = newRow.insertCell();
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = '削除';
        newCell.appendChild(deleteButton);

        //削除ボタンをクリックし、イベントを発動（タスクが削除）
        deleteButton.addEventListener('click', () => {
            deleteTasks(deleteButton);
        });
    } else {
        alert("項目を全て選択してください！！");
    }

});


//削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    // 削除ボタンを押下された行を取得
    const pushTr = deleteButton.parentNode.parentNode;
    // pushTrのインデックスを取得して行を削除する
    pushTr.parentNode.deleteRow(pushTr.sectionRowIndex);
};
