import "../styles/global.css";

// Página para colocar componentes fixos em todas as páginas, porém recalcula cada página acessada
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
