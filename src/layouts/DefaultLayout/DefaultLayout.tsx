import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type TDefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: TDefaultLayoutProps) => (
  <>
    <Head>
      <title>FoodSpin</title>
      <meta name="description" content="Order the fanciest food in the town!" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <div className="flex flex-col items-center min-h-screen">
      <header className="container relative z-50 flex items-center justify-between py-12">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={105}
              height={27}
              alt="FoodSpin Logo"
            />
          </Link>
          <nav className="mt-[2px] flex gap-x-8 pl-44 font-sans text-sm font-medium text-textPrimary">
            <a href="#" className="px-4 py-2 hover:underline">
              Breakfast
            </a>
            <a href="#" className="px-4 py-2 hover:underline">
              Lunch
            </a>
            <a href="#" className="px-4 py-2 hover:underline">
              Dinner
            </a>
          </nav>
        </div>
        <div className="relative mt-[-6px] cursor-pointer">
          <Image
            src="/icons/shopping-bag.svg"
            width={18}
            height={21}
            alt="Shopping Cart Icon"
          />
          {/* "Shopping cart has items" indicator */}
          <div className="absolute -right-[2px] -bottom-[1px] h-[6px] w-[6px] rounded-full bg-primary" />
        </div>
      </header>

      <main className="flex flex-col flex-1 w-full">{children}</main>

      <footer className="absolute bottom-0 left-0 right-0 flex justify-end p-4 gap-x-2">
        <SocialIcon
          url="https://github.com/Andkoo/foodspin"
          target="_blank"
          bgColor="hsl(0, 0%, 80%)"
          fgColor="hsl(0, 0%, 40%)"
          className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
        />
        <SocialIcon
          url="mailto:andrejmikulicka95@gmail.com"
          target="_blank"
          bgColor="hsl(0, 0%, 80%)"
          fgColor="hsl(0, 0%, 40%)"
          className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
        />
      </footer>
    </div>
  </>
);

export default DefaultLayout;
