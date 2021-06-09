import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
