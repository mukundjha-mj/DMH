import { SignedIn, SignedOut, SignInButton, UserButton, UserProfile } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import SignInPage from "./SignInPage";
import { useState } from "react";
import { dark } from "@clerk/themes"

function Navbar() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClick = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div className="h-[148px] flex justify-center">
                <div className="flex items-center place-content-between text-[17px] fixed z-10 container min-h-[65px] mb-[20px] border-b border-solid border-[var(--button-secondary-border)] bg-[#0D1117]">
                    <div>
                        <Link className="text-[var(--foreground)]" to="/">DMH</Link>
                    </div>
                    <div className="flex flex-wrap gap-8 items-center">
                        <nav>
                            <ul className="flex gap-5">
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/">Home</Link></li>
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/about">About</Link></li>
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/features">Feature</Link></li>
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/how-it-works">How it works</Link></li>
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/faq">FAQ</Link></li>
                                <li className="hover:text-[var(--header-foreground)] text-[var(--foreground)]"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>

                        <SignedOut>
                            <button
                                className="border-2 cursor-pointer rounded-2xl px-3 py-1 bg-[#c3d0e5] hover:bg-[#0D1117] text-black hover:text-white"
                                onClick={handleClick}
                            >
                                Login/Signup
                            </button>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: {
                                            width: "2.5rem",  
                                            height: "2.5rem", 
                                        },
                                        userButtonPopoverMain: {
                                            backgroundColor: "#0d1117",
                                            color: "--var(--header-foreground)"
                                            
                                        },
                                        userButtonPopoverActionButton: {
                                            color: "--var(--header-foreground)"

                                        },
                                        scrollBox: {
                                            backgroundColor: "#0d1117",
                                            color: "green"

                                        }
                                    }
                                }}
                            />
                            {/* <UserProfile /> */}

                        </SignedIn>
                    </div>
                </div>
            </div>

            <div
                id="popup"
                className={`fixed inset-0 bg-transparent bg-opacity-10 z-50 flex justify-center items-center transition-opacity ${isPopupVisible ? "block" : "hidden"
                    }`}
            >
                <div className="p-6 rounded-lg shadow-lg relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        onClick={handleClick}
                    >
                        ✖
                    </button>
                    {isPopupVisible && <SignInPage />}
                </div>
            </div>
        </>
    );
}

export default Navbar;
