import { createWorker } from "tesseract.js";
const worker = createWorker({
    logger: console.log,
    langPath:"../Language"
});

(async () => {
    await worker.load()
    await worker.loadLanguage("chi_tra")
    await worker.initialize("chi_tra")
    const {data:{text}}=await worker.recognize("../測試用.png")
    console.log(text)
    await worker.terminate()
})()