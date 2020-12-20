// This file will be transpiled by babel to dist folder.
// Command: "babel -d dist src/server.js"

import path from "path"
import React from "react"
import express from "express"
import ReactDOMServer from "react-dom/server"
import { ChunkExtractor } from "@loadable/server"

const app = express()
const PORT = 4000

// path should be correct
// since this file already bundled into dist folder, current directory(./) is used.
const nodeStats = path.resolve(
    __dirname,
    './node/loadable-stats.json',
)
  
const webStats = path.resolve(
    __dirname,
    './client/loadable-stats.json',
)

// "/client/" is the publicPath mentioned in webpack.client.js.
app.use('/client/', express.static(path.join(process.cwd(), './dist/client/')))

app.get("/*", (req, res) => {
    // Getting entry file mentioned in webpack.server.js
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
    const { default: App } = nodeExtractor.requireEntrypoint()

    const webExtractor = new ChunkExtractor({ statsFile: webStats })
    const jsx = webExtractor.collectChunks(<App location={req.url} />)

    const html = `
        <html>
            <head>
                ${webExtractor.getScriptTags()}
            </head>
            <body>
                <div id="app-root">
                    ${ReactDOMServer.renderToString(jsx)}
                </div>
            </body>
        </html>
    `
    res.set('content-type', 'text/html')
    res.send(html)
})

const server = app.listen(PORT, () => {
    console.log("Server listening on port:", PORT)
})

// close server to prevent PORT issues
process.on('uncaughtException', () => {
    server.close()
})
process.on('SIGTERM', () => {
    server.close()
})