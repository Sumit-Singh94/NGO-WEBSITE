"use client";

import React from "react";
import Image from "next/image";

const Homepage: React.FC = () => {
  return (
    <main className=" text-white">
      
      {/* HERO SECTION */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/gallery/img1.jpg"
            alt="Empowering lives"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 " />
        </div>

        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-4 py-10 md:px-0">
          <div className="max-w-xl space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
                Who we are
              </p>
              <h1 className="text-3xl font-extrabold leading-tight md:text-3xl lg:text-3xl">
                Empowering Lives Through Skill
                <span className="mt-1 block">Development</span>
              </h1>
            </div>

            <p className="text-sm leading-relaxed text-gray-200 md:text-base">
              Transforming potential into success by providing the tools,
              resources, and training needed to thrive in today&apos;s job market.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="rounded-2xl bg-pink-500 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-pink-600">
                Join us now
              </button>
              <button className="rounded-2xl bg-white/90 px-8 py-3 text-sm font-semibold text-pink-600 shadow-lg hover:bg-white">
                Donate
              </button>
            </div>

            <div className="space-y-4 pt-4 text-sm">
              <div className="flex items-center gap-2 text-gray-200">
                <span className="flex h-8 w-8 items-center justify-center rounded-full  text-base">
                  !
                </span>
                <span>1504878, Rm Nisha Nagar, Delhi</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((id) => (
                    <Image
                      key={id}
                      src={`https://i.pravatar.cc/40?img=${id}`}
                      alt="member"
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-black/70"
                    />
                  ))}
                </div>

                <p className="text-sm font-medium text-gray-100">
                  Join Our Organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* NEXT PAGE SECTION */}
     <section className="bg-white text-black py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <h2 className="mb-10 text-center text-lg font-semibold tracking-[0.25em] text-gray-700">
          OUR MISSION IS TO{" "}
          <span className="text-pink-500">BRIDGE POTENTIAL</span> AND{" "}
          <span className="text-pink-500">OPPORTUNITY</span> THROUGH
          <br />
          <span className="mt-1 inline-block">
            TAILORED TRAINING PROGRAMS FOR ALL AGES.
          </span>
        </h2>

    {/* ABOUT SECTION */}


<div className="border border-pink-500/40 bg-white p-8 md:p-10 mb-14">
  <div className="grid gap-10 md:grid-cols-2 md:items-center">
    {/* TEXT LEFT */}
    <div className="space-y-6 text-black">
      <h3 className="text-2xl font-semibold">
        About <span className="text-pink-500">Ngo</span>
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="h-4 w-4 bg-pink-500" />
          <p className="text-base font-semibold">Who we are-</p>
        </div>

        <p className="text-sm leading-relaxed">
          Founded in [Year], our organization has been at the forefront of
          workforce development, focusing on equipping underprivileged youth
          and adults with the skills they need to succeed. From basic
          education to advanced vocational training, we provide a range of
          programs designed to meet the unique needs of our community.
        </p>
      </div>
    </div>

    {/* IMAGE RIGHT */}
    <div className="relative flex justify-center md:justify-end">
      <div className="relative h-64 w-full max-w-sm">
        <div className="absolute -left-4 -top-6 h-10 w-10 rounded-full bg-pink-300" />
        <div className="absolute -right-5 -top-6 h-10 w-15 z-1">
           <Image
        src="/gallery/lines.png"
        alt="image"
        fill
        className="object-cover"
        /> </div>
        <div className="absolute -right-6 -bottom-5 h-20 w-20" >
        <Image
        src="/gallery/Group 919.png"
        alt="image"
        fill
        className="object-cover"
        /> </div>
        <div className="relative h-full w-full overflow-hidden bg-black rounded-md">
          <Image
            src="/gallery/img2.jpg"
            alt="Mentor working on laptop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>


        {/* VISION & MISSION SECTION */}
        <div className="grid md:grid-cols-2 gap-10 md:items-stretch">
          {/* IMAGE LEFT */}
          <div className="relative h-72 w-full overflow-hidden rounded md:h-80">
            <Image
              src="/gallery/img4.jpg"
              alt="People collaborating"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="border border-pink-500/40 p-8 md:p-10 text-white">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 bg-pink-500" />
                <p className="text-base font-semibold text-black">
                  Our Vision and mission
                </p>
              </div>

              <p className="text-sm font-semibold text-black">
                &quot;Unlocking Potential, Creating Opportunities.&quot;
              </p>

              <p className="text-sm leading-relaxed text-black">
                Empowering underprivileged individuals with the skills and
                support needed for meaningful employment, envisioning a world
                where everyone can achieve their full potential through equal
                opportunities.
              </p>

              <button className="mt-4 inline-flex items-center justify-center  bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-pink-600">
                Become Our Member
                <span className="ml-2 text-lg">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

 
        {/* THIRD PAGE SECTION */}

         <section className="bg-pink-200 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold tracking-[0.3em] text-pink-500">
            EXPLORE PROGRAMS
          </h2>
          <p className="mt-3 text-2xl font-semibold text-black">
            Empower Your Future with Our Tailored Programs
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="bg-white h-60 px-10 py-10 text-black">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-6 w-6 bg-pink-500" />
              <h3 className="text-xl font-semibold">Ngo Programs</h3>
            </div>

            <p className="text-sm leading-relaxed">
              Our tailored programs empower individuals at every stage of life,
              providing the skills and support needed to secure meaningful
              employment and build a better future.
            </p>
          </div>

          <div className="relative flex justify-center">

            <div className="absolute -left-1 top-5 h-24 w-24 rounded-full bg-pink-300" />
            <div className="absolute right-5 -top-1 h-24 w-24 ">
              <Image
                 src="/gallery/lines.png"   
                  alt="People collaborating on computers"
                  fill
                  className="object-cover"
              /> </div>
                 <div className="absolute right-5 -bottom-10 h-30 w-20" >
        <Image
        src="/gallery/Group 919.png"
        alt="image"
        fill
        className="object-cover"
        /> </div>
            <div className="relative h-64 w-full max-w-md overflow-hidden">
            
              <div className="relative h-full w-full">
                <Image
                  src="/gallery/img3.png"
                  alt="People collaborating on computers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                  {/* CARD SECTION  */}

<section className="bg-pink-200 py-16 text-white">
  <div className="mx-auto max-w-6xl px-4 md:px-0">
    <div className="grid gap-8 md:grid-cols-3">

      {/* CARD 1 */}
      <div className="flex flex-col overflow-hidden rounded-2xl bg-gray-50 text-black shadow-[0_14px_30px_rgba(0,0,0,0.15)]">
        <div className="bg-pink-500 px-6 py-4 text-center text-sm font-semibold text-white md:text-base">
          Employability at 12-18
        </div>
        <div className="flex flex-1 flex-col px-7 py-8 text-sm leading-relaxed">
          <p>
            We offer foundational skills training for youth, focusing on
            literacy, numeracy, and life skills to prepare them for future
            education and career opportunities.
          </p>

          <div className="my-5 h-px w-full bg-gray-300" />

          <p className="mb-3 font-semibold">Includes:</p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Basic education support</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Career awareness and exploration</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Mentorship and guidance</span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center rounded-md bg-black px-8 py-3 text-xs font-semibold text-white hover:bg-gray-900 md:text-sm">
              Learn More
              <span className="ml-2 text-lg">{">"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="flex flex-col overflow-hidden rounded-2xl   bg-gray-50 text-black shadow-[0_14px_30px_rgba(0,0,0,0.15) border-2 border-pink-500/70">
        <div className="bg-pink-500 px-6 py-4  text-center text-sm font-semibold text-white md:text-base">
          Employability at 19-30
        </div>
        <div className="flex flex-1  flex-col px-7 py-8 text-sm leading-relaxed">
          <p>
            We offer foundational skills training for youth, focusing on
            literacy, numeracy, and life skills to prepare them for future
            education and career opportunities.
          </p>

          <div className="my-5 h-px w-full bg-gray-300" />

          <p className="mb-3 font-semibold">Includes:</p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Basic education support</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Career awareness and exploration</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Mentorship and guidance</span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center rounded-md bg-black px-8 py-3 text-xs font-semibold text-white hover:bg-gray-900 md:text-sm">
              Learn More
              <span className="ml-2 text-lg">{">"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="flex flex-col overflow-hidden rounded-2xl bg-gray-50 text-black shadow-[0_14px_30px_rgba(0,0,0,0.15)">
        <div className="bg-pink-500 px-6 py-4 text-center text-sm font-semibold text-white md:text-base">
          Employability at 30+
        </div>
        <div className="flex flex-1 flex-col px-7 py-8 text-sm leading-relaxed">
          <p>
            We offer foundational skills training for youth, focusing on
            literacy, numeracy, and life skills to prepare them for future
            education and career opportunities.
          </p>

          <div className="my-5 h-px w-full bg-gray-300" />

          <p className="mb-3 font-semibold">Includes:</p>

          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Basic education support</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Career awareness and exploration</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-pink-500 text-xs text-pink-500">
                ✓
              </span>
              <span>Mentorship and guidance</span>
            </li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center rounded-md bg-black px-8 py-3 text-xs font-semibold text-white hover:bg-gray-900 md:text-sm">
              Learn More
              <span className="ml-2 text-lg">{">"}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


 {/* FOOTER SECTION  */}


<footer className="mt-16 bg-[#111111] text-gray-200 rounded-t-[40px]">
  <div className="mx-auto max-w-6xl px-4 py-14 md:px-0">

    <div className="grid gap-12 text-center md:text-left md:grid-cols-3 mb-10">
      <h3 className="text-base font-semibold text-pink-500">Core Values</h3>
      <h3 className="text-base font-semibold text-pink-500">Useful links</h3>
      <h3 className="text-base font-semibold text-pink-500">Our contacts</h3>
    </div>

    <div className="grid gap-12 md:grid-cols-3 text-sm text-gray-300 md:text-left text-center">

      <div className="space-y-8">
        <p className="leading-relaxed">
          At Charity 128, we prioritize transparency, integrity, and inclusivity.
          These values guide our actions as we work tirelessly to bridge the gap
          between those in need and those willing to help.
        </p>

        <div className="space-y-4">
          <h4 className="text-base font-semibold text-pink-500">
            Sign up for our newsletter
          </h4>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-sm border border-pink-500/70 bg-transparent px-4 py-3 text-sm text-gray-100 outline-none placeholder:text-gray-500 focus:border-pink-400"
          />
          <button className="w-full rounded-sm bg-pink-500 px-8 py-3 text-sm font-semibold text-white hover:bg-pink-600">
            Signup
          </button>
        </div>
      </div>

      <ul className="space-y-3">
        <li><a href="#" className="hover:text-pink-400">Home</a></li>
        <li><a href="#" className="hover:text-pink-400">Our Mission</a></li>
        <li><a href="#" className="hover:text-pink-400">Why Choose Us</a></li>
        <li><a href="#" className="hover:text-pink-400">Our Programs</a></li>
        <li><a href="#" className="hover:text-pink-400">Membership</a></li>
      </ul>

      <div className="space-y-6">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-pink-400 text-lg">📨</span>
          <span>information@office.com</span>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-pink-400 text-lg">📞</span>
          <span>+6329562949</span>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-pink-400 text-lg">🗺️</span>
          <span>2307 Beverley, New York</span>
        </div>

        <div className="flex gap-4 justify-center md:justify-start pt-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
            f
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
            ◎
          </button>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
      © Charity 128. All Rights Reserved 2025. • Licensing
    </div>
  </div>
</footer>








    </main>
  );
};

export default Homepage;
