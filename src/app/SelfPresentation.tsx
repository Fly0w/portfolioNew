"use client";

import React, { Component, useState, useEffect } from "react";

import Image from "next/image";
import imgMe from "../../public/img/body drawing no-bg.png";

interface MyState {
  typeValue: string;
  typeStatus: boolean;
  displayTextArray: string[];
  typingSpeed: number;
  erasingSpeed: number;
  newTextDelay: number;
  displayTextArrayIndex: number;
  charIndex: number;
}

interface MyProps {}

export default function SelfPresentation<MyProps, MyState>() {
  const [typeValue, setTypeValue] = useState<string>("");
  const [typeStatus, setTypeStatus] = useState<boolean>(false);
  const [displayTextArray, setDisplayTextArray] = useState<string[]>([
    "Biicycle",
    "Sccooter",
    "Skkateboard",
    "Phhone",
  ]);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);
  const [erasingSpeed, setErasingSpeed] = useState<number>(100);
  const [newTextDelay, setNewTextDelay] = useState<number>(2000);
  const [displayTextArrayIndex, setDisplayTextArrayIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  const [displayedLetters, setDisplayedLetters] = useState("");

  let word =
    "Loorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium error earum vero maiores suscipit veritatis nisi incidunt dolorum nam? Asperiores quidem quibusdam adipisci, dignissimos sint iste consequatur nostrum fugiat.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < word.length - 1) {
        setDisplayedLetters((prevLetters) => prevLetters + word[index]);
        console.log(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Utiliser un délai fixe pour chaque lettre

    return () => clearInterval(interval);
  }, [word]);

  //   const eraseText = () => {
  //     if (charIndex > 0) {
  //       if (!typeStatus) {
  //         setTypeStatus(true);
  //         setTypeValue(
  //           displayTextArray[displayTextArrayIndex].substring(0, charIndex - 1)
  //         );
  //         setCharIndex(charIndex - 1);
  //         setTimeout(eraseText, erasingSpeed);
  //       }
  //     } else {
  //       setTypeStatus(false);
  //       setDisplayTextArrayIndex(displayTextArrayIndex + 1);
  //       if (displayTextArrayIndex >= displayTextArray.length)
  //         setDisplayTextArrayIndex(0);
  //       setTimeout(typeText, typingSpeed + 1000);
  //     }
  //   };

  return (
    <>
      <article className="px-40 w-full relative" style={{ height: "600px" }}>
        <div className="w-96 text-8xl font-titan pt-32 text-with-border tracking-wider">
          <p className="text-left drop-shadow-lg">FLORIAN</p>
          <p className="text-right drop-shadow-lg">BUDNIEWSKI</p>
        </div>

        <div className="flex right-0 bottom-0 absolute">
          <div
            className="typed-text flex items-center text-center justify-center mr-20 pt-32 text-2xl font-cormo"
            style={{ width: "600px" }}
          >
            <span>{displayedLetters}</span>
            {/* <span className="blinking-cursor block">|</span> */}
          </div>
          <Image
            src={imgMe}
            className="drop-shadow-xl"
            alt="Picture of me"
            height={500}
          />
        </div>
      </article>
    </>
  );
}
