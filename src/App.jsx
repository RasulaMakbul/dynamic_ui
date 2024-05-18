import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./compnents/Button";
import Header from "./compnents/Header";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-20 py-3" href="#login">
          Something
        </Button> */}
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
