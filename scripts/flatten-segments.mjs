// Runs after `next build` (npm "postbuild").
//
// Next 16.4's static export writes per-segment prefetch data as nested files,
// e.g. out/contact/__next.contact/__PAGE__.txt, but the client router requests
// a dotted name, e.g. /contact/__next.contact.__PAGE__.txt
// (convertSegmentPathToStaticExportFilename). Without this step those
// prefetches 404 and Next falls back to fetching the whole page.
// This copies every nested segment file to the dotted name the client expects.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const OUT = resolve(import.meta.dirname, "..", "out");

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });

let copied = 0;
const visit = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (!statSync(path).isDirectory() || name === "_next") continue;
    if (name.startsWith("__next.")) {
      for (const file of walk(path)) {
        const dotted = relative(path, file).split(/[\\/]/).join(".");
        copyFileSync(file, join(dir, `${name}.${dotted}`));
        copied++;
      }
    } else {
      visit(path);
    }
  }
};

visit(OUT);
console.log(`flatten-segments: wrote ${copied} segment file(s)`);
