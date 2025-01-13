import Form from "../components/Form";
import "./Home.css";

function Home() {
  const date = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return (
    <>
      <header>
        <h1>Today, {formattedDate}</h1>
      </header>
      <main>
        <Form date={formattedDate} />
      </main>
    </>
  );
}

export default Home;
