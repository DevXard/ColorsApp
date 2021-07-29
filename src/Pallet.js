import ColorBox from './ColorBox';
import "./Palette.css";

const Palet = ({colors}) => {
    console.log(colors)
    return (
        <div className="Palette">
        {/* Navbar goes here */}
            <div className="Palette-colors">
            {/* Color boxes */}
                {colors.map(color => <ColorBox key={color.color} background={color} />)}
            </div>
            {/* Footer goes here */}
        </div>
    )
}

export default Palet;