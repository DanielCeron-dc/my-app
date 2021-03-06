import React, { useState } from "react";
import classes from "./CheckBox.module.css";
import ToolTip from "../ToolTip/ToolTip";

interface Props {
	hoverText?: string;
	buttonHoverText?: string;
	hoverColor?: string;
	selectedColor?: string;
	onClick?: () => void;
	selected?: boolean;
}

const CheckBox: React.FC<Props> = (props) => {
	const { selected } = props;
	const [hover, sethover] = useState(false);

	let selectedColor = props.selectedColor ? props.selectedColor : "rgb(37, 189, 72)";
	let hoverColor = props.hoverColor ? props.hoverColor : "rgba(37, 189, 72, 0.231)";

	let color = selected ? selectedColor : "rgba(181, 189, 186, 0.292)";
	const onClickFunction = () => {
		if (props.onClick) {
			props.onClick();
		}
	};

	return (
		<div
			style={{
				borderRadius: "30%",
				border: "none",
				padding: "none",
				display: "inline-block",
				position: "relative",
				outline: "none",
				marginLeft: "3px",
			}}
			onMouseEnter={() => sethover(true)}
			onMouseLeave={() => sethover(false)}>
			<button
				className={classes.btn}
				style={hover && !selected ? { background: hoverColor } : { background: color }}
				onClick={() => onClickFunction()}>
				{props.children}
			</button>
			{hover && props.hoverText && (
				<ToolTip
					hoverText={props.hoverText}
					hoverButtontext={props.buttonHoverText}
					color={selectedColor}
					buttonColor={selectedColor}
				/>
			)}
		</div>
	);
};

export default CheckBox;
