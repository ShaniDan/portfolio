import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-4 sm:p-8 md:p-12 lg:p-24">
      <header className="flex justify-between relative">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Shakhnoza (Shani) Mirabzalova
        </h1>
        <div className="flex gap-2">
          <a href="https://github.com/ShaniDan">
            <Image src="/github.svg" height={25} width={25} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/shakhnoza-mirabzalova-355535165/">
            <Image src="/linkedin.svg" height={25} width={25} alt="LinkedIn" />
          </a>
          <a href="/resume.pdf">
            <Image
              src="/file-02-text.svg"
              height={25}
              width={25}
              alt="Resume"
            />
          </a>
        </div>
      </header>

      <section className="mt-8 md:mt-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">
          Driven by my passion for creativity, problem-solving and innovative
          technology, I made a bold shift from Accounting and Finance to iOS
          development.{" "}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          I've immersed myself in learning Swift, tackling algorithmic
          challenges, and crafting iOS applications. This journey has not only
          enhanced my technical skills but also reinforced my love for finding
          innovative solutions.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Starting out independently, I delved into esteemed programs like
          Stanford's CS193p and Harvard's CS50, alongside Udemy tutorials.
          Recognizing the importance of mentorship, I became part of the
          inspiring UnderdogDevs community. Here, I benefited greatly from the
          guidance of a Lead iOS Engineer, whose wisdom profoundly influenced my
          development path. Additionally, participating in the 2023 Swift
          Mentorship Program sharpened my focus and bolstered my ambitions in
          iOS development.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          As a testament to my dedication, I successfully launched two
          applications: QuizCard Flashcards Maker and Owley AI Flashcards. Feel
          free to explore them in my portfolio to see my progress in action.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Beyond coding, I express myself through digital art in Adobe
          Illustrator and enjoy experimenting with food recipes (some of which
          are actually edible!). Balancing work with life, I treasure moments
          with my energetic young son, who constantly inspires me.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          I'm eager to explore opportunities where I can leverage my skills and
          grow in the dynamic field of iOS development. Whether it's
          collaborating on innovative projects or discussing potential
          opportunities, let's connect and create something impactful together!
        </p>
      </section>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 lg:mx-32 mt-16 md:mt-32 gap-8 md:gap-16 lg:gap-32">
        <div className="mt-8 md:mt-16">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span>Owley AI Flashcards </span>
          </h2>
          <p className="mb-4 md:mb-6">
            Tech: Swift, SwiftUI, OpenAI api, Firebase, FireStore, RevenueCat
          </p>
          <p className="mb-4 md:mb-6">
            Owley - AI Flashcards Maker application was crafted using SwiftUI
            and integrated with Firebase for robust user authentication and
            Firestore database for efficient data storage. The application
            empowers users to create flashcards manually inputting text for both
            questions and answers, or utilize the image upload feature to
            include visual content. Additionally, it is leveraged with the
            OpenAI API, users can pose questions and receive AI-generated
            answers in real-time. These AI-generated flashcards can then be
            saved for future practice sessions, offering a dynamic and
            personalized learning experience.
          </p>
          <div className="flex gap-4 md:gap-10">
            <a
              className="flex gap-1 items-center"
              href="https://apps.apple.com/us/app/owley-ai-flashcards/id6473753837?platform=iphone"
            >
              <Image
                src="/apple-logo.svg"
                height={22}
                width={22}
                alt="Apple Store"
                className="mr-1"
              />
              <span className="underline">Download</span>
            </a>

            <a
              className="flex gap-1 items-center"
              href="https://github.com/ShaniDan/StudyCardsAI"
            >
              <Image
                src="/github.svg"
                height={22}
                width={22}
                alt="Github"
                className="mr-1"
              />
              <span className="underline">Source</span>
            </a>
          </div>
        </div>
        <Image
          src="/owley.png"
          height={458}
          width={210}
          alt="Owley AI Flashcards"
          className="self-center md:mr-1"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 lg:mx-32 mt-16 md:mt-32 gap-8 md:gap-16 lg:gap-32">
        <div className="mt-8 md:mt-16">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span>QuizCards</span>
          </h2>
          <p className="mb-4 md:mb-6">Tech: Swift, SwiftUI, UserDefaults</p>
          <p className="mb-4 md:mb-6">
            The QuizCard application was developed entirely using SwiftUI. This
            innovative tool enables users to create customized flashcard sets
            that they can add flashcards to the sets. QuizCard provides data
            security and privacy by storing all user-generated content locally
            on the device. Utilizing UserDefaults, QuizCard ensures that
            sensitive information remains securely stored within the user's
            device, minimizing external dependencies and safeguarding user data
            integrity.
          </p>
          <div className="flex gap-4 md:gap-10">
            <a
              className="flex gap-1 items-center"
              href="https://apps.apple.com/us/app/quizcard-flashcards-maker/id6458346061?platform=iphone"
            >
              <Image
                src="/apple-logo.svg"
                height={22}
                width={22}
                alt="Apple Store"
                className="mr-1"
              />
              <span className="underline">Download</span>
            </a>

            <a
              className="flex gap-1 items-center"
              href="https://github.com/ShaniDan/StudyCardsAI"
            >
              <Image
                src="/github.svg"
                height={22}
                width={22}
                alt="Github"
                className="mr-1"
              />
              <span className="underline">Source</span>
            </a>
          </div>
        </div>
        <Image
          src="/quizcards.png"
          height={458}
          width={210}
          alt="QuizCards"
          className="self-center md:mr-1"
        />
      </div>
    </main>
  );
}
