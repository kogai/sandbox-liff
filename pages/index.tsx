import React from "react";
import { render } from "react-dom";
import liff from "@line/liff";

const IndexPage = () => {
  // const liffRef = React.useRef<typeof liff | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    if (isInitialized) {
      return;
    }
    liff.init({ liffId: process.env.LIFF_ID || "" }).then(() => {
      setIsInitialized(true);
    });
  }, [isInitialized]);

  const onLogin = React.useCallback(() => {
    liff.login();
  }, []);

  const onSendMessage = React.useCallback(() => {
    liff
      .sendMessages([{ type: "text", text: "hello!" }])
      .then(() => alert("done"))
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <h1>Hello Next.js 👋</h1>
      <div>{isInitialized && JSON.stringify(liff.getContext())}</div>
      <div>{isInitialized && JSON.stringify(liff.isInClient())}</div>
      <div>{isInitialized && JSON.stringify(liff.isLoggedIn())}</div>
      <div>{isInitialized && JSON.stringify(liff.getAccessToken())}</div>
      <div>{isInitialized && JSON.stringify(liff.getDecodedIDToken())}</div>
      <div>
        <button onClick={onLogin}>ログインする</button>
      </div>
      <div>
        <button onClick={onSendMessage}>メッセージ送信</button>
      </div>
    </>
  );
};

render(<IndexPage />, document.body, function done() {
  console.log("Installed.");
});
