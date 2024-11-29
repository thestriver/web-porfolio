import { ProjectCard } from './ProjectCard'
const projects = [
    {
        gitlink: "https://blinkpay.vercel.app/",
        image: "https://cdn.devdojo.com/images/november2020/hero-image.jpeg",
        title: "BlinkPay",
        description: "BlinkPay is a cross-border payment platform powered by Solana Pay ⚡. Built using React (Next.js) framework, Solana Web3.js, Solana Pay and Tailwind CSS."
    },
    {
        gitlink: "https://www.idunu.org/",
        image: "https://www.idunu.org/assets/images/logo2.png",
        title: "IDUNU",
        description: "Award-winning full-stack Stellar blockhain-powered fundraising and fund distribution solutions for high-impact, cost-effective charities, and NGOs."
    },
    {
        gitlink: "https://azeroretro-project.vercel.app/",
        image: "https://www.lamhi.studio/retrozero.png",
        title: "RetroZero",
        description: "RetroZero is bringing back arcade game memories to blockchains."
    },
    {
        gitlink: "https://www.web3communityai.com/",
        image: "https://www.lamhi.studio/web3ai.png",
        title: "Web3 Community AI",
        description: "Custom Conversational AI assistants and agents for developer-focused web3 startups and protocols."
    },
    {
        gitlink: "https://www.web3collection.app/",
        image: "https://i.ibb.co/QMXb40s/Screenshot-2024-11-29-at-9-48-36-AM.png",
        title: "Web3collection",
        description: "The biggest collection of tools and resources for web3 developers. Built using React (Next.js) framework, Typescript, and CSS."
    },
    {
        gitlink: "https://gitlab.com/thestriver/solana-school-kit",
        image: "https://cdn.pixabay.com/photo/2020/02/08/09/52/chalk-4829602_1280.jpg",
        title: "Donate A School Kit dApp",
        description: "dApp for donating school kits. Built using React (Next.js), Ethers.js, Solana Web3.js, Solana Pay, Stripe and Tailwind CSS."
    },
    // {
    //     gitlink: "https://github.com/thestriver/devore-edu-app",
    //     image: "https://i.ibb.co/6Jbby8C/Screen-Shot-2022-03-22-at-18-28-24.png",
    //     title: "Devore Educational dApp",
    //     description: "A web3 Educational Adventure. Winners get a cool gift at the end. Built using Typescript, React JS, Ethers.js, Headless UI and Tailwind CSS"
    // },
    {
        gitlink: "https://github.com/thestriver/schoolkit-contracts",
        image: "https://i.ibb.co/4Y1w14p/Screen-Shot-2022-03-22-at-18-14-52.png",
        title: "Smart Contracts",
        description: "Smart Contracts for the Donate-A-School-Kit dApp. Built using Solidity and Ethers.js"
    },
    {
        gitlink: "https://memories-ten.vercel.app/",
        image: "https://i.ibb.co/vzn332F/z-picture.png",
        title: "Memories",
        description: "An dApp that stores memories forever. Images and texts are stored on a decentralized file chain. Built using React JS, CSS and the IPFS web3 protocol"
    },
    // {
    //     gitlink: "https://github.com/thestriver/moralised",
    //     image: "https://i.ibb.co/Kb4cJsX/Screen-Shot-2021-08-08-at-23-16-28.png",
    //     title: "Moralised",
    //     description: "A minimalist ETH token dashboard showing last transactions and tokens balance. Built with React JS, Moralis API, and Bootstrap CSS."
    // },
    // {
    //     gitlink: "https://github.com/thestriver/js-eth-votingdapp",
    //     image: "https://i.ibb.co/MRyFvVT/ethereum-1024x683.jpg",
    //     title: "A Simple Voting dApp",
    //     description: "A voting dApp that allows users to choose between three specified candidates. Built using Javascript, Solidity, Ethers.js, Ganache."
    // }
];
export const Projects = () => {
    return (
        <>
            <div className="container flex flex-col  px-4 mx-auto xl:flex-row">
                <div className="flex flex-col mt-2 xl:items-start">
                    <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Shipped Projects 🚀</h1>
                    <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                        Here are some personal <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                        >web3</span> projects I've worked on
                    </p>
                </div>

            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl">
                    {projects?.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

        </>

    )
}