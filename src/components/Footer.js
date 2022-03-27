export const Footer = () => {
    return (
        <div className="py-8">
            <footer className="bg-gray-900 rounded-2xl flex items-center justify-between px-4 lg:py-7 py-1 lg:mx-48 max-w-7xl md:flex-row">
            <p className=" text-sm text-center font-medium text-white md:text-left md:mb-0">
            &copy;{(new Date().getFullYear())} Mahmud Adeleye.</p>
            <div className="flex items-center space-x-6">
                <a href="https://github.com/thestriver">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="30" height="30"
                    viewBox="0 0 30 30"
                    >    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                </a>
                {/* <a href="https://www.linkedin.com/in/mahmudadeleye/">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="7.025 7.025 497.951 497.95" className="w-5 h-5" aria-hidden="true">
                    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-974.482" y1="1306.773" x2="-622.378" y2="1658.877" gradientTransform="translate(1054.43 -1226.825)">
                    <stop offset="0" stopColor="#2489be" />
                    <stop offset="1" stopColor="#0575b3" />
                    </linearGradient>
                    <path
                    d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                    fill="url(#a)"
                    />
                </svg>
                </a> */}
                {/* <a href="#">
                    <span className="sr-only">Resume</span>
                    <img width="25" height="25"
                    src="https://img.icons8.com/external-itim2101-blue-itim2101/344/external-resume-human-resources-itim2101-blue-itim2101-3.png" />
                </a>
                <a href="#">
                    <span className="sr-only">Mail</span>
                    <img  width="30" height="30" src="https://img.icons8.com/color/344/apple-mail.png" /> 
                </a> */}
                </div>
             </footer>
        </div>

    )
}