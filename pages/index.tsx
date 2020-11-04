import React from "react";
import { render } from "react-dom";
import liff from "@line/liff";
import VConsole from "vconsole";

const IndexPage = () => {
  // const liffRef = React.useRef<typeof liff | null>(null);
  const [isInitialized, setIsInitialized] = React.useState(false);

  React.useEffect(() => {
    if (isInitialized) {
      return;
    }
    new VConsole();
    console.log(setIsInitialized);
    // liff.init({ liffId: process.env.LIFF_ID || "" }).then(() => {
    //   setIsInitialized(true);
    // });
  }, [isInitialized]);

  const onLogin = React.useCallback(() => {
    liff.login();
  }, []);

  const onLogout = React.useCallback(() => {
    liff.logout();
  }, []);

  const onSend = React.useCallback(() => {
    setTimeout(() => {
      liff.sendMessages([{ type: "text", text: "Here?" }]);
    }, 3000);
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
      {JSON.stringify(location.search)}
      <div>{isInitialized && JSON.stringify(liff.getContext())}</div>
      <div>{isInitialized && JSON.stringify(liff.isInClient())}</div>
      <div>{isInitialized && JSON.stringify(liff.isLoggedIn())}</div>
      <div>{isInitialized && JSON.stringify(liff.getAccessToken())}</div>
      <div>{isInitialized && JSON.stringify(liff.getDecodedIDToken())}</div>
      <div>{isInitialized && JSON.stringify(liff.getProfile())}</div>
      <div style={{ margin: 10 }}>
        <button onClick={onLogin}>ログインする</button>
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={onLogout}>ログアウトする</button>
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={onSendMessage}>メッセージ送信</button>
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={onSend} style={{ padding: 10 }}>
          メッセージ遅延送信
        </button>
      </div>
    </>
  );
};

render(<IndexPage />, document.body, function done() {
  console.log("Installed.");
});
