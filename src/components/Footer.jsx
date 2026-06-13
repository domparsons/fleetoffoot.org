export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt=""
            className="h-8 w-auto"
            aria-hidden="true"
          />
          <span className="text-sm font-medium text-body">
            Fleet of Foot &copy;
          </span>
        </div>
        <div className="flex items-center">
          <a
            href="https://en-gb.facebook.com/foffoffoff/"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-tint hover:text-brand"
            target="_blank"
            rel="noreferrer"
            aria-label="Fleet of Foot on Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
