export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats/>
    </div>
  );
}

function Logo() {
  return <h1>🏖️ Far Away</h1>
}

function Form() {
  return (
    <div className="add-form">
      <h31>What do you need for your 😍 trip?</h31>
    </div>
  )
}

function PackingList() {
  return <div className="list">LIST</div>
}

function Stats() {
  return <footer className="stats">
    <em> 🧰 You hava X items on you list, and you already packed X(x%) </em>
  </footer>
}
