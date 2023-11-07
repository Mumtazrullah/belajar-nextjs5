import Head from "next/head";
import Navbar from "./components/Navbar";

const contact = ({todos}) => {
  return (
    <>
      <Head>
        <title>Contact | Belajar Next JS</title>
        <meta name="description" content="Belajar Next JS" />
      </Head>
      <Navbar />
      <h1>Ini halaman Contact</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}
    </>
  );
};

export default contact;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const todos = await res.json();
  
    return {
      props: {
        todos,
      },
    };
  };