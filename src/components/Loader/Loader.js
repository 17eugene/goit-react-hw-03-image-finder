import { ImSpinner } from "react-icons/im";

function Loader() {
  return (
    <div className="spinContainer">
      <ImSpinner className="Spinner" size="80" />
    </div>
  );
}

export { Loader };
