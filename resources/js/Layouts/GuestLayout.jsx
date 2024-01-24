export default function Guest({ children }) {
    return (
        <div className="bg-slate-100/50 h-screen">
            <div className="max-w-7xl mx-auto px-6 sm:px-4">
                <nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
                    <a href="/">
                        <img
                            src="https://img.logoipsum.com/298.svg"
                            alt="Logo"
                            className="w-10"
                        />
                    </a>
                </nav>

                <div className="flex flex-col items-start py-6 lg:h-[36rem] lg:flex-row">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-700">
                            <span className="text-orange-600">
                                Sistem Pendukung Keputusan
                            </span>
                            <br />
                            <span className="">
                                Penilaian Kinerja Guru Terbaik MTs MUHAMMADIYAH
                                1 Samarinda Menggunakan
                            </span>{" "}
                            <span className="text-orange-600">
                                Metode TOPSIS
                            </span>
                        </h2>
                        <div className="mt-3 py-6 pl-4">
                            <ul className="list-disc marker:text-orange-500 text-gray-600 space-y-4">
                                <li>
                                    <p className="lg:text-lg">
                                        Sistem pendukung keputusan &#40;SPK&#41;
                                        merupakan sistem yang interaktif
                                        berbasis komputer yang dirancang untuk
                                        membantu dalam mengambil suatu
                                        keputusan. Sistem ini dibuat berdasarkan
                                        metode yang digunakan dan menggunakan
                                        kombinasi dari berbagai model, teknik
                                        analisa dan pengumpulan informasi.
                                    </p>
                                </li>
                                <li>
                                    <p className="lg:text-lg">
                                        Technique For Others Refrence By
                                        Similarity to Ideal Solution
                                        &#40;TOPSIS&#41; adalah metode dengan
                                        kategori Multi-Criteria Decision Making
                                        &#40;MCDM&#41; yaitu teknik pengambilan
                                        keputusan dari beberapa pilihan
                                        alternatif yang ada, khususnya MADC.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex mt-8 w-full lg:w-1/2 lg:justify-end lg:mt-0">
                        <div className="w-full lg:max-w-md bg-white rounded-lg shadow">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
