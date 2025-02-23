import { Link } from "react-router-dom";
import { useState } from "react";
import heroVideo from "../assets/hero-content.mp4";
import presentationImg from "../assets/presentation.png";
import storage from "../assets/storage.png"


function Hero() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    return (
        <>
            <div className="main-content h-full">
                <div className="container home mb-10">
                    <section className="hero-content ">
                        <div className="hero-text text-wrap gap-3">
                            <h1>Your Complete Medical History, Securely Managed</h1>
                            <p className="text-md text-[var(--header-foreground)] ">
                                Access and store all your medical records in one secure place, anytime, anywhere.
                            </p>
                        </div>
                        <div className="started-wrapper">
                            <div className="primary-button items-center flex justify-center gap-2 ">
                                <button className="bg-[var(--accent-primary)] text-[var(--header-foreground)] p-2 px-5 rounded-md cursor-pointer">Sign up</button>
                                <Link onClick={handleClick} className="border border-solid border-[var(--button-secondary-border)] bg-[var(--button-secondary-background)] text-[var(--header-foreground)] p-2 rounded-md cursor-pointer" >Get Trail Free</Link>
                            </div>
                        </div>
                        <div className="hero-video-container relative aspect-[1.49] flex justify-center items-center mt-10 z-0">
                            <video height="639" width="1008" className="rounded-xl w-[90%] z-10" playsInline autoPlay muted loop>
                                <source src={heroVideo} type="video/mp4" />
                            </video>
                            <img src={presentationImg} className="rounded-3xl overflow-clip border-0 align-middle absolute w-full h-full object-cover z-0" />
                        </div>

                    </section>
                </div>
                <hr className=" container border-[var(--button-secondary-border)] border" />
                <div className="container mt-10">
                    <div className="second_home bg-gray-900 drop-shadow-[0_5px_10px_rgba(156,163,175,0.5)] py-24 sm:py-32 rounded-2xl ">
                        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="text-center text-base/7 font-extrabold text-[var(--header-foreground)]">Deploy faster</h2>
                            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-[var(--header-foreground)] sm:text-5xl">
                                Everything you need to deploy your app
                            </p>
                            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                                <div className="relative lg:row-span-2">
                                    <div className="absolute inset-px rounded-lg bg-gray-300 lg:rounded-l-[2rem]"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                                Mobile friendly
                                            </p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                            </p>
                                        </div>
                                        <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                                            <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                                <img
                                                    className="size-full object-cover object-top"
                                                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
                                </div>
                                <div className="relative max-lg:row-start-1">
                                    <div className="absolute inset-px rounded-lg bg-gray-300 max-lg:rounded-t-[2rem]"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                                            </p>
                                        </div>
                                        <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                                            <img
                                                className="w-full max-lg:max-w-xs"
                                                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                                </div>
                                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                                    <div className="absolute inset-px rounded-lg bg-gray-300"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                        <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                                            </p>
                                        </div>
                                        <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                            <img
                                                className="h-[min(152px,40cqw)] object-cover"
                                                src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                                </div>
                                <div className="relative lg:row-span-2">
                                    <div className="absolute inset-px rounded-lg bg-gray-300 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                    <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                        <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                            <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                                Powerful APIs
                                            </p>
                                            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                                Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                                            </p>
                                        </div>
                                        <div className="relative min-h-[30rem] w-full grow">
                                            <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                                                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                                                            NotificationSetting.jsx
                                                        </div>
                                                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                                                    </div>
                                                </div>
                                                <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="popup"
                className={`fixed inset-0 bg-transparent bg-opacity-10 flex justify-center items-center transition-opacity ${isPopupVisible ? "block" : "hidden"
                    }`}
            >
                <div className="  p-6 rounded-lg shadow-lg relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={handleClick}
                    >
                        ✖
                    </button>
                    {/* <SignInPage /> */}
                </div>
            </div>
        </>
    );
}

export default Hero;