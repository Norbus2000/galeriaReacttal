import "./Kep.css";

function Kep({ kepAdat, setAktKep }) {
  const kattintottKep = kepAdat.id;

  return (
    <div>
      <p>{kepAdat.cim}</p>
      <img
        src={kepAdat.eleresiUt}
        alt="Erdo"
        onClick={() => setAktKep(kattintottKep)}
      />
    </div>
  );
}
export default Kep;
