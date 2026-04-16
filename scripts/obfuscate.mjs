import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const OUT_DIR = join(process.cwd(), "out");

function findJsFiles(dir) {
  const results = [];
  function walk(d) {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith(".js")) {
        results.push(full);
      }
    }
  }
  walk(dir);
  return results;
}

const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 0.5,
  deadCodeInjection: false,
  debugProtection: false,
  identifierNamesGenerator: "hexadecimal",
  renameGlobals: false,
  selfDefending: false,
  stringArray: true,
  stringArrayEncoding: ["base64"],
  stringArrayThreshold: 0.5,
  transformObjectKeys: true,
  unicodeEscapeSequence: false,
};

const jsFiles = findJsFiles(OUT_DIR);
console.log(`Found ${jsFiles.length} JS files to obfuscate...`);

let processed = 0;
for (const file of jsFiles) {
  try {
    const code = readFileSync(file, "utf-8");
    if (code.length < 50) continue;

    const result = JavaScriptObfuscator.obfuscate(code, obfuscatorOptions);
    writeFileSync(file, result.getObfuscatedCode());
    processed++;
  } catch (err) {
    console.warn(`Skipped ${file}: ${err.message}`);
  }
}

console.log(`Obfuscated ${processed} / ${jsFiles.length} JS files.`);
