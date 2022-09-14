import React from "react";
import styles from "../../styles/CyberButton.module.css";

export default function CyberButton() {
	return (
		<button className={styles.cyber_button}>
			Glitch<span aria-hidden>_</span>
			<span aria-hidden className={styles.cyber_button__glitch}>
				Glitch_
			</span>
			<span aria-hidden className={styles.cyber_button__tag}>
				R25
			</span>
		</button>
	);
}