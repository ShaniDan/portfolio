import Image from "next/image";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-4 sm:p-8 md:p-12 lg:p-24">
      <header className="flex justify-between relative">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Shakhnoza Mirabzalova
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-black/70">
            iOS Developer who enjoys building simple, user-friendly apps that just make sense
          </p>
        </div>
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
        <p className="text-lg md:text-xl lg:text-lg mb-4">
          Driven by a love for creativity, problem-solving, and building things
          that actually work the way users expect, I transitioned from
          Accounting and Finance into iOS development. It turns out balancing
          numbers was good training for debugging, just with fewer spreadsheets
          and more Swift.
        </p>
        <p className="text-lg md:text-xl lg:text-lg mb-4">
          I focus on building clean, user-friendly apps that feel intuitive,
          because great software shouldn’t need instructions (or a deep
          breath). Along the way, I’ve immersed myself in Swift, algorithms, and
          hands-on development through programs like Stanford’s CS193p,
          Harvard’s CS50, and mentorship with a Lead iOS Engineer who helped
          shape my approach to architecture and best practices.
        </p>
        <p className="text-lg md:text-xl lg:text-lg mb-4">
          As a testament to my dedication, I’ve launched three apps:QuizCard
          Flashcards Maker, Owley AI Flashcards, and Driving Prep UK,each one teaching
          me something new (usually right after something broke). You can
          explore them in my portfolio to see the progress in action.
        </p>
        <p className="text-lg md:text-xl lg:text-lg mb-4">
          Outside of code, I enjoy digital illustration, experimenting with
          food recipes (some successful, some educational), and spending time
          with my energetic young son, who keeps me curious, grounded, and very
          good at explaining complex things simply.
        </p>
        <p className="text-lg md:text-xl lg:text-lg mb-4">
          I’m excited to keep growing as an iOS developer and to contribute to
          teams building thoughtful, well-crafted products. If you’d like to
          connect or collaborate, I’d love to chat.
        </p>
      </section>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 lg:mx-32 mt-16 md:mt-32 gap-8 md:gap-16 lg:gap-32">
        <div className="mt-8 md:mt-16 md:flex-1">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span>Driving Prep UK</span>
          </h2>
          <p className="mb-4 md:mb-6">
            Tech: Swift, SwiftUI, In-App Purchases, RevenueCat, SwiftData,
            Localization
          </p>
          <p className="mb-4 md:mb-6">
            Designed and developed an iOS application for the licensed UK
            driving theory exam using Swift and SwiftUI, serving over 300 active
            users currently. Implemented structured JSON-based storage for
            questions, answers, and media with efficient decoding. Implemented
            full localization and internationalization support, enabling the
            app to support multiple international languages for non-native
            English speakers preparing for the UK driving exam, including
            localized UI strings and question content. Implemented SwiftData as
            the local persistence layer to store user practice test results,
            enabling efficient retrieval, querying, and presentation of
            performance history across sessions. Implemented RevenueCat SDK for
            subscriptions, supporting active, paying users.
          </p>
          <div className="flex gap-4 md:gap-10">
            <a
              className="flex gap-1 items-center"
              href="https://apps.apple.com/us/app/driving-prep-uk/id6743640274"
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
          </div>
        </div>
        <ImageCarousel
          images={[
            { src: "/01.png", alt: "Driving Prep UK" },
            { src: "/02.png", alt: "Driving Prep UK" },
            { src: "/03.png", alt: "Driving Prep UK" },
            { src: "/04.png", alt: "Driving Prep UK" },
            { src: "/dvsa5.png", alt: "Driving Prep UK" },
            { src: "/dvsad4.png", alt: "Driving Prep UK" },
          ]}
          className="self-center md:mr-1 w-full sm:w-[150px] md:w-[240px] lg:w-[360px] md:flex-none"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 lg:mx-32 mt-16 md:mt-16 gap-8 md:gap-16 lg:gap-32">
        <div className="mt-8 md:mt-16 md:flex-1">
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
        <ImageCarousel
          images={[
            { src: "/owley.png", alt: "Owley AI Flashcards" },
            { src: "/owley2.png", alt: "Owley AI Flashcards" },
            { src: "/owley3.png", alt: "Owley AI Flashcards" },
            { src: "/owley4.png", alt: "Owley AI Flashcards" },
          ]}
          className="self-center md:mr-1 w-full sm:w-[150px] md:w-[240px] lg:w-[360px] md:flex-none"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-16 lg:mx-32 mt-16 md:mt-32 gap-8 md:gap-16 lg:gap-32">
        <div className="mt-8 md:mt-16 md:flex-1">
          <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            <span>QuizCards</span>
          </h2>
          <p className="mb-4 md:mb-6">Tech: Swift, SwiftUI, UserDefaults</p>
          <p className="mb-4 md:mb-6">
            The QuizCard mobile application was developed entirely using SwiftUI. This
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
        <ImageCarousel
          images={[
            { src: "/quizcards.png", alt: "QuizCards" },
            { src: "/quizcard1.png", alt: "QuizCards" },
            { src: "/quizcard2.png", alt: "QuizCards" },
          ]}
          className="self-center md:mr-1 w-full sm:w-[150px] md:w-[240px] lg:w-[360px] md:flex-none"
        />
      </div>
    </main>
  );
}
