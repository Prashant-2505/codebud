'use client'
import Accordion from "@/components/Accordion";
import { useAuth } from "@/context/authContext";
import { useState } from "react";

export default function Home() {
  const [showPatternDiv, setShowPatternDiv] = useState(true);
  const [showTopicDiv, setShowTopicDiv] = useState(false);

  const [auth] = useAuth()
  console.log(auth)

  const question = ['1', '2', '3'];
  const topics = ['string', 'array', 'tree'];

  return (
    <main className="pt-[10rem] w-full h-full border-2 p-8">
      <h1>
        Welcome to <span className="font-semibold">CodeBud</span> - Your Ultimate Resource for DSA Patterns, Web Development, and Insightful Blogs! Explore a curated list of questions designed to enhance your understanding of Data Structures and Algorithms, delve into the latest trends in web development, and stay informed with our thought-provoking blogs. Let the journey towards mastering coding and staying updated on industry insights begin!
      </h1>

      <div className="flex rounded-lg justify-evenly gap-8 mt-12 w-[60%] m-auto">
        <button
          onClick={() => { setShowTopicDiv(false); setShowPatternDiv(true); }}
          className="bg-red-500 w-full px-4 py-4 rounded-lg text-white text-[1.3rem] hover:bg-red-700 duration-200 ease-in-out"
        >
          Question Pattern wise
        </button>
        <button
          onClick={() => { setShowPatternDiv(false); setShowTopicDiv(true); }}
          className="bg-yellow-500 w-full px-4 py-4 rounded-lg text-white text-[1.3rem] hover:bg-yellow-700 duration-200 ease-in-out"
        >
          Question Topic Wise
        </button>
      </div>

      {showPatternDiv ? (
        <div className="mt-10 border-2 h-auto">
          {topics.map((topic) => (
            <Accordion key={topic} name={topic} questions={question} />
          ))}
        </div>
      ) : (
        <div className="mt-10 border-2 h-[300px]">
          {/* Adjust the height as needed */}
          hii topic div
        </div>
      )}
    </main>
  );
}
