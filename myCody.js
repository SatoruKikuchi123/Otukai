//依頼者セレクターの要素をrequesterに代入
const requester = document.querySelector('#requester');
//品セレクターの要素をgoodsに代入
const goods = document.querySelector('#goods');
//数セレクターの要素をnumberに代入
const number = document.querySelector('#numberGoods');
//登録ボタンの要素をsubmitに代入
const submit = document.getElementsByClassName('submit')[0];
//ulタグの要素をrequesterListに入れる
const table = document.getElementsByClassName('table')[0];


//登録ボタンをクリックし、イベントを発動（依頼者を追加）
submit.addEventListener('click', evt => {

    // 選択した依頼者を追加・表示
    //セレクタの中身が入っているか確認　
    if (requester.value !== "") {
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



        //依頼者に削除ボタンを付与
        //button要素を生成
        const deleteButton = document.createElement('button');
        // 生成したボタンの中に削除を書き込み
        deleteButton.innerHTML = '削除';
        //liタグの子に削除ボタンを追加
        table.appendChild(deleteButton);

        //削除ボタンをクリックし、イベントを発動（タスクが削除）
        deleteButton.addEventListener('click', evt => {
            //     deleteTasks(deleteButton);
        });
    }
});


//削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    //closest : deleteButtonの親要素の中からliを含む最も近い要素を返す
    const chosenTask = deleteButton.closest('targetTable');
    table.removeChild(chosenTask);
};
