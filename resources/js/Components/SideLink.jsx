import { Link } from "@inertiajs/react";

export default function SideLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "flex items-center px-3 py-2 rounded-lg  " +
                (active
                    ? "text-orange-50 bg-orange-500 "
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:text-gray-900 ") +
                className +
                " transition-colors duration-300 transform"
            }
        >
            {children}
        </Link>
    );
}
