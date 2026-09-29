// --- Estilos de Texto ---
const reset = "\x1b[0m";
const bold = "\x1b[1m";
const dim = "\x1b[2m";
const italic = "\x1b[3m";
const underline = "\x1b[4m";

// --- Colores Frontales (Texto) ---
const black = "\x1b[30m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";

// --- Colores Brillantes (Más legibles en terminales oscuras) ---
const blackBright = "\x1b[90m";
const redBright = "\x1b[91m";
const greenBright = "\x1b[92m";
const yellowBright = "\x1b[93m";
const blueBright = "\x1b[94m";
const magentaBright = "\x1b[95m";
const cyanBright = "\x1b[96m";
const whiteBright = "\x1b[97m";

// --- Colores de Fondo (Background) ---
const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";

const Color = (code, text) => `${code}${text}${reset}`;

export {
    reset,
    bold,
    dim,
    italic,
    underline,

    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,

    blackBright,
    redBright,
    greenBright,
    yellowBright,
    blueBright,
    magentaBright,
    cyanBright,
    whiteBright, 

    bgBlack,
    bgRed,
    bgGreen,
    bgYellow,
    bgBlue,    
    bgMagenta,    
    bgCyan,
    bgWhite,

    Color
}