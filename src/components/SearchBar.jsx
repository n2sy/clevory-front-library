import { useRef } from "react";

function SearchBar({ filterBook }) {
  let startyearRef = useRef("");
  let endyearRef = useRef("");

  function searchHandler() {}

  return (
    <div>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Start Year</td>
            <td>
              <input
                type="number"
                className="form-control"
                ref={startyearRef}
              />
            </td>
            <td>End Year</td>
            <td>
              <input type="number" className="form-control" ref={endyearRef} />
            </td>
            <td>
              <button onClick={searchHandler} className="btn">
                Search
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SearchBar;
