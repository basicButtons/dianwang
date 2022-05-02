import "../styles/globals.css";
import "../styles/loginForm.less";
import "../styles/question.less";
import Main from "../components/Main";
import { UserInfoContextProvider, userInfo } from "../share/context/index";
import "../styles/main.css";
import { useUserInfo } from "../share/fetch";

function MyApp({ Component, pageProps }) {
  const userInfo: userInfo = useUserInfo();
  return (
    <Main>
      <UserInfoContextProvider value={userInfo}>
        <Component {...pageProps} />
      </UserInfoContextProvider>
    </Main>
  );
}

export default MyApp;
