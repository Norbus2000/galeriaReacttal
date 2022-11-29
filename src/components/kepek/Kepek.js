import Kep from "../kep/Kep";
import './Kepek.css';

function Kepek({ kepekAdat, setAktKep }) {
  return (
    <div className="kepek">
      {kepekAdat.map((kep, index) => {
        return <Kep kepAdat={kep} key={index} setAktKep={setAktKep} />;
      })}
    </div>
  );
}
export default Kepek;
