import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";

class KonvaImage extends React.Component {
    state = {
        image: new window.Image(),
    };
    componentDidMount() {
        this.state.image.src = this.props.image;
        this.state.image.onload = () => {
            // need to update layer manually
            this.imageNode.getLayer().batchDraw();
        };
    }
    render() {
        return (
            <Image
                x={this.props.x}
                y={this.props.y}
                width={this.props.width}
                height={this.props.height}
                image={this.state.image}
                ref={(node) => {
                    this.imageNode = node;
                }}
            />
        );
    }
}

export default KonvaImage;
