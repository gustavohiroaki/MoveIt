import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

// Página para colocar componentes fixos em todas as páginas, porém recalcula cada página acessada
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
