import GlobalStyle from "../src/theme/GlobalStyle"
// arquivo principal (renderização)
function MyApp({Component, pageProps}) {
    return (
        <>
        <GlobalStyle/>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp