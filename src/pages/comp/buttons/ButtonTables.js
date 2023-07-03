const ButtonStart = '<button className="btn">Button</button>'


const ButtonSizes = `<button className="btn xs">X Small</button>
<button className="btn sm">Small</button>
<button className="btn md">Medium</button>
<button className="btn lg">Large</button>
`;

const ButtonStyles = `<button className="btn sm sl">Solid</button>
<button className="btn sm ol">Outline</button>
<button className="btn sm fd">Fade</button>
<button className="btn sm gh">Ghost</button>
`;


const ButtonColors = `<button className="btn sm nt">Neutral</button>
<button className="btn sm primary">Primary</button>
<button className="btn sm positive">Positive</button>
<button className="btn sm warning">Warning</button>
<button className="btn sm negative">Negative</button>
`;

const ButtonColorVariants = <><button className="btn sm sl nt">Neutral</button>
<button className="btn sm primary">Primary</button>
<button className="btn sm positive">Positive</button>
<button className="btn sm warning">Warning</button>
<button className="btn sm negative">Negative</button>
</>;

const ButtonIcons = `<button className="btn sm sl nt i-lf"><img src='../assets/copy.svg' />
Left Icon </button>
<button className="btn sm sl primary i-rg"> <img src='../assets/copy.svg' />
Right Icon </button>
`;


export default { ButtonSizes, ButtonStyles, ButtonColors, ButtonIcons, ButtonStart, ButtonColorVariants };