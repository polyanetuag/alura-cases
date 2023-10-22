import Link from "../src/components/Link";

export default function Page404() {
    return (
        <div>
            <h1>Você se perdeu e caiu na página 404 😔</h1>
            <Link href="/">
                <a>Ir para a home</a>
            </Link>
        </div>
    )
}