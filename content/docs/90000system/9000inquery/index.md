+++
url = "/docs/system/inquery/"
# aliases = []
title = "お問い合わせ"
description = ""
toc = false
weight = 99000

[sitemap]
  changefreq = "yearly"
  priority = 0.9
+++

<div id="contactForm">

LawManagerに興味を持っていただきありがとうございます。  
ご不明な点がございましたら、以下のフォームよりお問い合わせください。

- 3営業日以内に返信いたします
- 自動返信メールが届かない場合は入力したメールアドレスに誤りがある可能性があります。ご確認ください。

<div>
  <label for="mail" class="form-label">メールアドレス（返信先）</label>
  <input type="email" class="form-control" id="mail" />
</div>
<div>
  <label for="content" class="form-label">お問い合わせ内容</label>
  <textarea id="content" class="form-control" rows="10"></textarea>
</div>

<button onclick="submit()" class="btn btn-primary btn-lg mt-5" id="sendButton">送信</button>

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
