import React, { useEffect, useRef } from "react";

const PlupinChat = () => {
  const ref = useRef(null);

  console.log(ref, "Ref123");

  useEffect(() => {
    // 👇️ use document.getElementById()
    const el = document.getElementById("fb-customer-chat");
    console.log(el);

    // 👇️ (better) use a ref
    const el2 = ref.current;
    console.log(el2);

    var chatbox = document.getElementById("fb-customer-chat");
    console.log(chatbox, "footer123");
    chatbox.setAttribute("page_id", "116698047960547");
    chatbox.setAttribute("attribution", "biz_inbox");

    const FB = window.FB;
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v15.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" ref={ref} className="fb-customerchat"></div>
    </>
  );
};

export default PlupinChat;
