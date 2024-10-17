let file;
try {
    file = Deno.openSync(".env", { write: true });
    const decoder = new TextDecoder("utf-8");
    const data = await Deno.readFile(".env");
    const content = decoder.decode(data);
    if (content.includes("APP_KEY=")) {
        console.log(`\n🔑  App key has already been generated\n`);
        Deno.exit();
    }
} catch (_error) {
    file = Deno.createSync(".env");
}
const encoder = new TextEncoder();
const appKey = crypto.randomUUID();
const data = encoder.encode(`APP_KEY=${appKey}\n`);
file.writeSync(data);
file.close();
console.log(`\n🔑  App key has been successfully generated\n`);
