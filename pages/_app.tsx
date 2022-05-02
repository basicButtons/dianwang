import "../styles/globals.css";
import "../styles/loginForm.less";
import "../styles/question.less";
import { UserInfoContextProvider, userInfo } from "../share/context/index";
import { Nav } from "../components/Nav";
import { useUserInfo } from "../share/fetch";

function MyApp({ Component, pageProps }) {
  const userInfo: userInfo = useUserInfo();
  return (
    <UserInfoContextProvider value={userInfo}>
      <Nav></Nav>
      <Component {...pageProps} />
    </UserInfoContextProvider>
  );
}

export default MyApp;
