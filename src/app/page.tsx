import Link from "next/link";
import shortenUrl from "./serverActions/ShortenUrlAction";

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1 className="py-10 text-5xl font-extrabold text-center text-blue-600">Short URL</h1>
      </header>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl mx-auto mt-10">
        <h1 className="text-gray-600 font-bold mb-4 text-center text-3xl">Paste the URL to be shortened</h1>
        <div className="flex space-x-2 mb-4">
          <form method="POST" action={shortenUrl} className="flex space-x-2 mb-4 w-full">
            <input
              type="text"
              placeholder="Enter URL"
              name="originalUrl"
              className="border border-gray-300 rounded p-2 w-3/4 text-lg" 
            />
            <button
              type="submit"
              className="bg-blue-600 text-white rounded px-6 py-2 text-lg hover:bg-blue-700"
            >
              Shorten
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <Link href="/urls">
            <span className="bg-blue-600 text-white rounded px-6 py-2 text-lg hover:bg-blue-700">
              View All Shortened URLs
            </span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 w-full max-w-3xl mx-auto mt-10 text-center">
        <h3 className="text-xl font-bold mb-4">Simple and fast URL shortener!</h3>
        <p className="text-gray-500 mb-2">
          ShortURL allows you to shorten long links from
          <span className="font-medium text-black"> Instagram, Facebook, YouTube, Twitter, LinkedIn, WhatsApp, TikTok</span>,
          blogs, and sites. Just paste the long URL and click the <span className="font-medium text-black">Shorten URL</span> button.
        </p>
        <p className="text-gray-500 mb-2">
          On the next page, copy the shortened URL and share it on sites, chat, and emails. After shortening the URL, check
          how many clicks it received.
        </p>
      </div>
    </div>
  );
};
export default LandingPage;
