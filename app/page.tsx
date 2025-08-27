import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  const PopularCompanions = [
    {id: "123", name: "Neura the Brainy Explorer", topic: "Topic: Neural Network of the Brain", subject: "Science", duration: 45, color: "#E5D0FF"},
    {id: "456", name: "Countsy the Number Wizard", topic: "Topic: Neural Network of the Brain", subject: "Maths", duration: 30, color: "#FFDA6E"},
    {id: "789", name: "Verba The Vocabulary Builder", topic: "Topic: English Literature ", subject: "Language", duration: 30, color: "#BDE7FF"},
  ]
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {PopularCompanions.map((item) => (
          <CompanionCard key={item.id} id={item.id} name={item.name} topic={item.topic} subject={item.subject} duration={item.duration} color={item.color}  />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList 
        companions = {recentSessions}
        classNames = "w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
