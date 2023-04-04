import React from "react";
import ReactDOM from "react-dom";

function MeuComponente() {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Pizzeria - ADM</title>
        </head>
        <body>
          <div id="root"></div>
          <script type="module" src="/src/main.jsx"></script>
        </body>
      </html>
    </div>
  );
}

ReactDOM.render(<MeuComponente />, document.getElementById("app"));
