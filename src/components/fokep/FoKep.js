import "./FoKep.css";
import Button from "react-bootstrap/Button";

function FoKep({ kepekAdat, handleBalra, handleJobbra }) {
  return (
    <div className="fokep">
      <h3>{kepekAdat.cim}</h3>
      <img src={kepekAdat.eleresiUt} alt="Erdo" />
      <div className="pt-3 gombok ">
        <Button
          type="button"
          variant="outline-dark"
          onClick={(event) => handleBalra()}
        >
          {"<"}
        </Button>
        <Button
          type="button"
          variant="outline-dark"
          onClick={(event) => handleJobbra()}
        >
          {">"}
        </Button>
      </div>
    </div>
  );
}
export default FoKep;
