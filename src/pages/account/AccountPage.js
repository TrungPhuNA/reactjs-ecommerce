import React, { useEffect } from "react";
import AccountInfo from "./include/AccountInfo";
import { isWideScreen } from "../../helpers/screen";
import AccountSetting from "./include/mobile/AccountSetting";

import { useTheme } from "../../components/utils/useTheme";

function AccountPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theme = useTheme();
  return (
    <>
      {isWideScreen() && (
        <div className="container">
          <div className="page-container">
            <AccountInfo />
          </div>
        </div>
      )}

      {!isWideScreen() && (
        <>
          <AccountSetting />
        </>
      )}
    </>
  );
}

export default AccountPage;
