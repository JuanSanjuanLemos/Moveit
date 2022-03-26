import Head from "next/head";
import {GetServerSideProps} from 'next';

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { CountDownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home/Home.module.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps{
  level:number;
  challengesCompleted:number;
  currentExperience:number;
}

export default function Home(props) {
  console.log(props)
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const {level, challengesCompleted,currentExperience} = ctx.req.cookies;
  return{
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience)
    }
  }
}
