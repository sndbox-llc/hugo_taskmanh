---
url: '/docs/task/create/'
title: 'タスクの作成'
menuTitle: ''
description: ''
toc: true
weight: 30200
tags: []
contributors: []
---

タスクを追加するには、左メニュー「タスク管理」の中にある「＋」ボタンをクリックします。

{{< picture src="img/addTask_tablet.webp" alt="" >}}

## 固定フィールドについて

固定フィールドはカスタムひな型とは別に用意されている、カスタム不可能なフィールドです。タスクの固定フィールドには以下の項目があります

<dl class="basic">
<dt>タイトル</dt>
<dd>タスクのタイトルを入力します。わかりやすいタイトルを心がけて下さい</dd>
<dt>担当者</dt>
<dd>タスクを担当するスタッフを指定します。複数名指定可能です</dd>
<dt>タスクステータス</dt>
<dd>タスクの状態を選択します。状態は任意に追加可能です。色分けも可能です</dd>
<dt>カテゴリ</dt>
<dd>タスクステータスと同様です。必要に応じてステータスとカテゴリを使い分けて下さい</dd>
<dt>案件番号</dt>
<dd>案件に紐づいたタスクの場合、ここで関連する案件を指定します。案件は１種類しか指定出来ません。複数にまたがるタスクは同じタスクを追加して対応して下さい</dd>
<dt>時刻</dt>
<dd>タスクの締め日を指定できます。時点や期間といった入力が可能です。不要な場合は「締め日を指定しない」にチェックを入れます</dd>
</dl>

{{< callout context="caution" title="時刻はカレンダーと連動" icon="outline/alert-triangle" >}}
タスクの締め日を指定すると、カレンダー上に当該タスクが表示されるため視認しやすくなります。
{{< /callout >}}
