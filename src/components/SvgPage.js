import React from 'react'

class SvgPage extends Component {
    render (){
        return (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x={this.x} y={this.y}  viewBox={this.viewBox} style={this.style} >
            {this.children}
            </svg>            
        )

    }
}