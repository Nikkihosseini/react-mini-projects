

export default function Footer() {
  return (
    <footer className="text-lightBlue-550 dark:text-darkBlue-100 text-xs md:text-sm mt-10">
      <p className="flex items-center flex-wrap justify-center gap-1.5">
        Copyright © {new Date().getFullYear()}
        <a
          className="flex items-center gap-1.5 ml-1"
          href="https://github.com/nikkihosseini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>NikkiHosseini</span>
        </a>
      </p>
    </footer>
  )
}
