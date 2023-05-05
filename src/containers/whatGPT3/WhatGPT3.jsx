import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="ChatGPT is a large language model created by OpenAI, based on the GPT-3 architecture. It is designed to process natural language and generate human-like responses to text-based prompts. ChatGPT can be used for a variety of applications, such as chatbots, language translation, text summarization, and question-answering systems. It has been trained on a massive dataset of text, allowing it to understand and generate responses to a wide range of topics. ."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Through text-based interactions, we offer automated customer service, help, or information."
      />
      <Feature
        title="Knowledgebase"
        text="GPT-3 is a state-of-the-art language model developed by OpenAI, capable of generating human-like responses to natural language prompts with high accuracy"
      />
      <Feature
        title="Education"
        text="GPT-3 can support educational applications such as language translation, text summarization, and automated essay grading, improving the efficiency of learning and assessment."
      />
    </div>
  </div>
);

export default WhatGPT3;
