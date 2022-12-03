import React from "react";

function DummyResult() {
  return (
    <div class="card text-center mt-3">
      <div class="card-header">Results</div>
      <div class="card-body">
        <h5 class="card-title">Thankyou for uploading your file</h5>
        <p class="card-text">
          Your document is being redacted, please wait while we process the
          file.
        </p>
        <a href="#" class="btn btn-primary">
          Download
        </a>
      </div>
      <div class="card-footer text-muted">Cloaked - 2022</div>
    </div>
  );
}

export default DummyResult;
