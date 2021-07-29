import "./ColorBox.css"

const ColorBox = (props) => {
    const {name, color} = props.background;
    return(
        <div style={{background: color}} className="ColorBox">
            <div className="coppy-container">
                <div className="box-container">
                    <span> {name}</span>
                </div>
                <button className="copy-button">Coppy</button>
            </div>
            <span className="see-more">More</span>
        </div>
    )
}

export default ColorBox;