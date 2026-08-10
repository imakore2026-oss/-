import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  // 実運用ではここでメール送信やDB保存などの処理を行う。
  // このデモサイトではサーバーログへの出力のみ行い、受付完了として返す。
  console.log("[contact] received inquiry:", {
    name,
    email,
    company: payload.company,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
