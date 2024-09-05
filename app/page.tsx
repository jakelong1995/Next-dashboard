import InvoiceLogo from "@/app/ui/invoice-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex h-screen flex-col bg-gray-100">
      <div className="flex h-fit shrink-0 items-end bg-emerald-600 p-4 sm:p-6">
        <InvoiceLogo />
      </div>
      <div className="flex grow overflow-hidden">
        <div className="flex w-full flex-col justify-center gap-6 overflow-y-auto rounded-lg bg-white p-6 shadow-md md:w-2/5 md:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <p
            className={`text-sm text-gray-800 md:text-xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Invoice Dashboard.</strong> Manage your business
            operations efficiently with our intuitive interface, real-time data
            visualization, and powerful analytics tools.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-500 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="hidden md:flex md:w-3/5">
          <Image
            src="/hero-desktop.jpg"
            width={1000}
            height={760}
            alt="Hero Image"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
