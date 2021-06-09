interface Props {
    children: JSX.Element;
}

function Layout({children}: Props): JSX.Element {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;
