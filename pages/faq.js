// import Link from "../src/components/Link";
// import { useState, useEffect } from "react";
// import Head from 'next/head'
import FaqScreen from "../src/screens/FaqScreen";

export default FaqScreen;

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      faq,
    },
  };
}

// export default function FaqPage({faq}) {
//   // const [faq, setFaq] = useState([]);

//   // useEffect(() => {}, []);
//   return (
//     <div>
//        <Head>
//         <title>FAQ - Alura Cases Campanha</title>
//       </Head>
//       <h1>Alura Cases - Página de perguntas FAQ</h1>
//       <Link href="/">Ir para a Home</Link>
//       <ul>
//         {faq.map(({ answer, question }) => (
//           <article>
//             <h2>{question}</h2>
//             <p>{answer}</p>
//           </article>
//         ))}
//       </ul>
//     </div>
//   );
// }
