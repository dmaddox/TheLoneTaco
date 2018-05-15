import React from "react";

const InitialSearch = props =>
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Search for..." aria-label="SearchFor" aria-describedby="basic-addon" />
    <div className="input-group-append">
      <span className="input-group-text" id="basic-addon2">Go!</span>
    </div>
  </div>

export default InitialSearch;