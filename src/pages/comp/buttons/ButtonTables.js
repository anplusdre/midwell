const ButtonTables = {

ButtonStart : '<button className="btn">Button</button>',
ButtonSizes : `<button className="btn xs">X Small</button>
<button className="btn sm">Small</button>
<button className="btn md">Medium</button>
<button className="btn lg">Large</button>
`,
ButtonStyles : `<button className="btn sm sl">Solid</button>
<button className="btn sm fd">Fade</button>
<button className="btn sm ol">Outline</button>
`,
ButtonColors : `<button className="btn sm nt">Neutral</button>
<button className="btn sm primary">Primary</button>
<button className="btn sm positive">Positive</button>
<button className="btn sm caution">Caution</button>
<button className="btn sm negative">Negative</button>
`, 
ButtonColorVariants : <><button className="btn sm sl nt">Neutral</button>
<button className="btn sm primary">Primary</button>
<button className="btn sm positive">Positive</button>
<button className="btn sm caution">Caution</button>
<button className="btn sm negative">Negative</button>
</>,
ButtonIcons : `<button className="btn sm sl nt i-lf"> <img src='../assets/copy.svg' />Left Icon </button>
<button className="btn sm sl primary i-rg"> <img src='../assets/copy.svg' />Right Icon </button>
`,
ButtonsGroup1 : `<div className="btn-group">
    <button className="btn sm primary">Button</button>
    <button className="btn sm outline primary">Button</button>
    <button className="btn sm fade primary">Button</button>
</div>`,
ButtonsGroup2 : `<div className="btn-group btn-adjacent">
    <button className="btn sm primary">Button</button>
    <button className="btn sm primary">Button</button>
    <button className="btn sm primary">Button</button>
    <button className="btn sm primary">Button</button>
</div>`
};

export default ButtonTables;