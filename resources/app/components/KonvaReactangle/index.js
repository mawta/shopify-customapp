import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Group, Text, Rect, Transformer } from "react-konva";

class KonvaRectangle extends React.Component {
    componentDidMount() {
        this.checkNode();
    }
    componentDidUpdate() {
        this.checkNode();
    }

    onTransformStart() {
        console.log("onTransformStart");
    }

    onTransform() {
        console.log("onTransform");
    }

    onTransformEnd = (e) => {
        // transformer is changing scale of the node
        // and NOT its width or height
        // but in the store we have only width and height
        // to match the data better we will reset scale on transform end
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;

        console.log(e);
        console.log(this.transformer);

        const node = stage.findOne("." + selectedShapeName);
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();

        console.log(node);

        // we will reset it back
        node.scaleX(1);
        node.scaleY(1);
        this.props.afterTransform({
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
        });
    };

    checkNode() {
        // here we need to manually attach or detach Transformer node
        const stage = this.transformer.getStage();
        const { selectedShapeName } = this.props;

        var selectedNode = stage.findOne("." + selectedShapeName);
        // do nothing if selected node is already attached
        if (selectedNode === this.transformer.node()) {
            return;
        }
        if (selectedNode) {
            const type = selectedNode.getType();
            if (type != "Group") {
                selectedNode = selectedNode.findAncestor("Group");
            }
            // attach to another node
            this.transformer.attachTo(selectedNode);
        } else {
            // remove transformer
            this.transformer.detach();
        }

        this.transformer.getLayer().batchDraw();
    }
    render() {
        return (
            <Transformer
                ref={(node) => {
                    this.transformer = node;
                }}
                keepRatio={true}
                enabledAnchors={
                    this.props.anchors
                        ? this.props.anchors
                        : [
                              "top-left",
                              "top-right",
                              "bottom-left",
                              "bottom-right",
                          ]
                }
                transformstart={this.onTransformStart}
                transform={this.onTransform}
                transformend={(e) => {
                    this.onTransformEnd(e);
                }}
            />
        );
    }
}

export default KonvaRectangle;
