import DailyColor from "../components/DailyColor";
import Sum from "../components/Sum";

function Dashboard() {
  return (
    <>
      <header>
        <h1>The year you turned 30.</h1>
      </header>
      <main>
        <Sum />
        <DailyColor />
      </main>
    </>
  );
}

export default Dashboard;
