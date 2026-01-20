---
slug: docs/system/inquery
title: "お問い合わせ"
description: ""
toc: false
weight: 99000

sitemap:
  changefreq: "yearly"
  priority: 0.9
---

<div id="contactForm">

LawManagerに興味を持っていただきありがとうございます。  
ご不明な点がございましたら、以下のフォームよりお問い合わせください。

- 3営業日以内に返信いたします
- 自動返信メールが届かない場合は入力したメールアドレスに誤りがある可能性があります。ご確認ください。

<div class="contact-form">
<div class="mb-4">
<label for="mail" class="form-label custom-label">メールアドレス<span>必須</span></label>
<input type="email" class="form-control custom-input" id="mail" placeholder="example@mail.com" />
</div>

<div class="mb-4">
<label for="content" class="form-label custom-label">お問い合わせ内容</label>
<textarea id="content" class="form-control custom-input" rows="8" placeholder="こちらにご記入ください"></textarea>
</div>

<div class="text-center">
<button onclick="submit()" class="btn btn-submit" id="sendButton">
メッセージを送信する
</button>
</div>
</div>

<div id="errormessage" style="color:red"></div>

</div>

<div id="thanks"></div>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>

  const form = document.getElementById("contactForm");
  const thanks = document.getElementById("thanks");
  const sendButton = document.getElementById("sendButton");
  const errorMessage = document.getElementById("errormessage");
  const iconField = document.getElementById("iconField")
  const EMAIL_REG_EXP = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  // メール送信処理（更新版）
async function submit() {
  sendButton.disabled = true;
  const email = document.getElementById("mail");
  const content = document.getElementById("content");

  try {
    if (EMAIL_REG_EXP.test(email.value) === false) throw "メールアドレスが不正です";
    if (content.value.length === 0) throw "本文が空欄です";
  } catch (e) {
    errorMessage.innerHTML = e;
    sendButton.disabled = false;
    return;
  }

  const config = {
    method: "POST",
    url: "https://us-central1-nipo-plus.cloudfunctions.net/inqueryWebCommon",
    data: {
      email: email.value,
      text: `${content.value}\n`,
      site: "taskman"
    }
  };

  // 完了を待つ必要はない
  axios(config);
  form.setAttribute("style", "display:none");
  const textNode = document.createTextNode(`お問い合わせありがとうございます。${email.value}宛に確認メールを送ります。5分経過してもメールが届かない場合は再度お問い合わせください`);
  thanks.appendChild(textNode);


  return;
}


</script>

<style>
  /* 全体のベース調整 */
.contact-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

/* ラベルのデザイン */
.custom-label {
  font-weight: 600;
  color: #444;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
}
.custom-label span {
  font-size: 0.7rem;
  background: #ff4d4f;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 10px;
}

/* 入力欄のカスタマイズ */
.custom-input {
  border: 2px solid #edf2f7;
  border-radius: 10px;
  padding: 12px 15px;
  transition: all 0.3s ease;
  width: 100%;
}
.custom-input:focus {
  border-color: #4facfe;
  box-shadow: 0 0 0 4px rgba(79, 172, 254, 0.1);
  outline: none;
}

/* ラジオボタンをオシャレなチップ型に */
.radio-group {
  display: flex;
  gap: 12px;
}
.radio-group input[type="radio"] {
  display: none; /* デフォルトの丸を隠す */
}
.radio-card {
  flex: 1;
  padding: 15px;
  text-align: center;
  border: 2px solid #edf2f7;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  color: #666;
}
.radio-card span {
  font-size: 0.75rem;
  display: block;
  opacity: 0.6;
}
.radio-group input[type="radio"]:checked + .radio-card {
  border-color: #4facfe;
  background: rgba(79, 172, 254, 0.05);
  color: #4facfe;
}

/* 送信ボタン */
.btn-submit {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 172, 254, 0.4);
  color: white;
}
</style>
