import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import ReactApp from "../src/core/app";

const PORT = parseInt(process.argv[process.argv.indexOf("--port") + 1]);
const app = express();

app.get("/", (req, res) => {
  const indexFile = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    const sheet = new ServerStyleSheet();
    let reactAppHtml = "";
    let styleTags = "";
    try {
      reactAppHtml = ReactDOMServer.renderToString(
        <StyleSheetManager sheet={sheet.instance}>
          <ReactApp />
        </StyleSheetManager>
      );
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }

    return res.send(
      data
        .replace("</head>", `${styleTags}\n</head>`)
        .replace(
          '<div id="app-root"></div>',
          `<div id="app-root">${reactAppHtml}</div>`
        )
    );
  });
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// npm install webpack webpack-cli webpack-node-externals @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
// npm install ts-node --save-dev
