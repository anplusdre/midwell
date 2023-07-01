const ButtonStart = '<button className="btn">Button</button>'


const ButtonSizes = `<button className="btn xs">X Small</button>
<button className="btn sm">Small</button>
<button className="btn md">Medium</button>
<button className="btn lg">Large</button>
`;

const ButtonStyles = `<button className="btn sl">Solid</button>
<button className="btn ol">Outline</button>
<button className="btn fd">Fade</button>
<button className="btn gh">Ghost</button>
`;

const ButtonColors = `<button className="btn sm sl nt">Neutral</button>
<button className="btn sm sl primary">Primary</button>
<button className="btn sm sl pt">Positive</button>
<button className="btn sm sl wn">Warning</button>
<button className="btn sm sl ng">Negative</button>
<button className="btn sm disable">Disable</button>
`;

const ButtonIcons = `<button className="btn sm sl nt i-lf"><img src='../assets/copy.svg' />
Left Icon </button>
<button className="btn sm sl primary i-rg"> <img src='../assets/copy.svg' />
Right Icon </button>
`;


export default { ButtonSizes, ButtonStyles, ButtonColors, ButtonIcons, ButtonStart };