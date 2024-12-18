"use client";
import { useState, useEffect } from "react";

const Typewriter = ({
	profsArr = ["N/A"],
	typingSpeed = 100,
	deletingSpeed = 50,
	cursor = true,
	cursorBlinkSpeed = 500,
	loop = true,
	cursorCharacter = " |", // Customizable cursor
	randomizeTyping = false, // Random typing speed
	soundEffect = null, // Optional typing sound
	pauseDuration = 1000, // Pause between professions
	clearInstantly = false, // Instant clear or gradual delete
	typingColor = "#ffffff", // Text color during typing
}) => {
	const [text, setText] = useState(""); // Current text
	const [currentIndex, setCurrentIndex] = useState(0); // Current string index
	const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state
	const [showCursor, setShowCursor] = useState(true); // Cursor visibility

	// Cursor blinking effect
	useEffect(() => {
		if (!cursor) return;

		const blink = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, cursorBlinkSpeed);

		return () => clearInterval(blink);
	}, [cursor, cursorBlinkSpeed]);

	// Handle typing sound
	const playSound = () => {
		if (soundEffect) {
			const audio = new Audio(soundEffect);
			audio.play();
		}
	};

	// Typing and deleting logic
	useEffect(() => {
		const currentString = profsArr[currentIndex];
		let timeout;

		const getTypingSpeed = () => (randomizeTyping ? Math.random() * (typingSpeed - typingSpeed / 2) + typingSpeed / 2 : typingSpeed);

		if (!isDeleting) {
			// Typing logic
			if (text.length < currentString.length) {
				timeout = setTimeout(() => {
					setText((prev) => prev + currentString[prev.length]);
					playSound();
				}, getTypingSpeed());
			} else {
				timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
			}
		} else {
			// Deleting logic
			if (clearInstantly) {
				setText("");
				setIsDeleting(false);
				setCurrentIndex((prevIndex) => (loop ? (prevIndex + 1) % profsArr.length : prevIndex + 1));
			} else {
				if (text.length > 0) {
					timeout = setTimeout(() => {
						setText((prev) => prev.slice(0, -1));
					}, deletingSpeed);
				} else {
					setIsDeleting(false);
					setCurrentIndex((prevIndex) => (loop ? (prevIndex + 1) % profsArr.length : prevIndex + 1));
				}
			}
		}

		return () => clearTimeout(timeout);
	}, [text, isDeleting, currentIndex, profsArr, typingSpeed, deletingSpeed, loop, randomizeTyping, pauseDuration, clearInstantly]);

	return (
		<span>
			<span
				style={{
					color: typingColor,
					fontFamily: "inherit",
					whiteSpace: "pre",
					fontWeight: "bold",
				}}
			>
				{text}
			</span>
			{cursor && <span style={{ opacity: showCursor ? 1 : 0 }}>{cursorCharacter}</span>}
		</span>
	);
};
export default Typewriter;
