import CompanionCard from '@/components/CompanionCard'
import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
          <CompanionCard 
            id="123"
            name="Neura the Brainy Explorer"
            topic="Neural Network of the brain"
            subject="science"
            duration={45}
            color="#d7d324"
          />
          <CompanionCard 
            id="456"
            name="Countsy the Number Wizard"
            topic= "Derivatives & Integrals"
            subject="maths"
            duration={35}
            color="#e50dff"
          />
          <CompanionCard 
            id="621"
            name="Verba the Vocabulary Builder"
            topic="language"
            subject="English Literature"
            duration={35}
            color="#BDE7FF"
          />
      </section>

      <section className="home-section">
        <CompanionsList 
            title="Recently completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page