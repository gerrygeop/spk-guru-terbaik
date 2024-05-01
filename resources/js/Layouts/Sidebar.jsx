import SideLink from "@/Components/SideLink";
import { usePage } from "@inertiajs/react";

export default function Sidebar() {
    const user = usePage().props.auth.user;

    return (
        <aside className="bg-white fixed hidden lg:block lg:w-64 overflow-y-auto border-r">
            <div className="flex flex-col md:h-screen px-5 py-8">
                <a href="#">
                    <img
                        className="w-10"
                        src="https://img.logoipsum.com/298.svg"
                        alt="Logo"
                    />
                </a>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="-mx-3 space-y-3 ">
                        {user.role === "admin" ? (
                            <>
                                <SideLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                        />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">
                                        Home
                                    </span>
                                </SideLink>

                                <SideLink
                                    href={route("users.index")}
                                    active={route().current("users.*")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                        />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">
                                        Users
                                    </span>
                                </SideLink>

                                <SideLink
                                    href={route("kriteria.index")}
                                    active={route().current("kriteria.*")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                        />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">
                                        Kriteria
                                    </span>
                                </SideLink>

                                <SideLink
                                    href={route("alternatif.index")}
                                    active={route().current("alternatif.*")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                                        />
                                    </svg>

                                    <span className="mx-2 text-sm font-medium">
                                        Alternatif
                                    </span>
                                </SideLink>
                            </>
                        ) : (
                            <SideLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>

                                <span className="mx-2 text-sm font-medium">
                                    Home
                                </span>
                            </SideLink>
                        )}

                        <SideLink
                            href={route("topsis")}
                            active={route().current("topsis")}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                                />
                            </svg>

                            <span className="mx-2 text-sm font-medium">
                                Perhitungan
                            </span>
                        </SideLink>
                    </nav>
                </div>
            </div>
        </aside>
    );
}
