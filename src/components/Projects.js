import { ProjectCard } from './ProjectCard'
export const Projects = () => {
    return (
       <>
        <div className="container flex flex-col  px-4 mx-auto xl:flex-row">
            <div className="flex flex-col mt-2 xl:items-start">
                <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Shipped Projects 🚀</h1> 
                <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                    Here are some  <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                    >web3</span> projects I've worked on
                </p>
            </div>
            
        </div>
        
        <div className="container flex flex-col items-center px-2 mx-auto xl:flex-row">             
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">

            {/* Project 1  */}
            <ProjectCard
				gitlink="https://lamhi.vercel.app/"
				image="https://cdn.devdojo.com/images/november2020/hero-image.jpeg"				
				title="Lamhi"
				description="Lamhi helps you send and recieve digital money in an instant ⚡ across Africa.
                Built using React (Next.js) framework, Solana Web3.js, Solana Pay and Tailwind."
			/>

            {/* Project 2  */}
            <ProjectCard
				gitlink="https://github.com/thestriver/schoolkit-frontend"
				image="https://schoolkit-frontend.vercel.app/_next/image?url=http%3A%2F%2Fthehelpmatesfoundation.com%2Fwp-content%2Fuploads%2F2020%2F02%2FWhatsApp-Image-2019-12-19-at-6.46.27-PM-1024x768.jpeg&w=1920&q=75"				
				title="Donate A School Kit dApp"
				description="dApp for donating school kits.
                Built using React (Next.js), Ethers.js, Solana Web3.js, Solana Pay, Stripe and Tailwind CSS."
			/>

             {/* Project 3 */}
             <ProjectCard
				gitlink="https://github.com/thestriver/devore-edu-app"
				image="https://i.ibb.co/6Jbby8C/Screen-Shot-2022-03-22-at-18-28-24.png"				
				title="Devore Educational dApp"
				description="A web3 Educational Adventure. Winners get a cool gift at the end.
                Built using Typescript, React JS, Ethers.js, Headless UI and Tailwind CSS"
			/>


            {/* Project 4  */}
            <ProjectCard
				gitlink="https://github.com/thestriver/schoolkit-contracts"
				image="https://i.ibb.co/4Y1w14p/Screen-Shot-2022-03-22-at-18-14-52.png"				
				title="Smart Contracts"
				description="Smart Contracts for the Donate-A-School-Kit dApp.
                Built using Solidity and Ethers.js"
			/>

            {/* Project 5  */}
            <ProjectCard
				gitlink="https://memories-ten.vercel.app/"
				image="https://i.ibb.co/vzn332F/z-picture.png"				
				title="Memories"
				description="An dApp that stores memories forever. Images and texts are stored on a decentralized file chain..
                Built using React JS, CSS and the IPFS web3 protocol"
			/>
            
            
            {/* Project 4  */}
            <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
                <div className="rounded-lg">
                    <img className="" alt="moralised app" src="https://i.ibb.co/Kb4cJsX/Screen-Shot-2021-08-08-at-23-16-28.png" />
                </div>
                <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">Moralised</h4>
                <p className="text-sm py-2">A minimalist ETH token dashboard showing last transactions
                    and tokens balance. 
                    <span className="py-1"> Built with React JS, Moralis API, and Bootstrap CSS.</span>
                    </p>
                    <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href="https://github.com/thestriver/moralised">
                        Link 
                    </a>
                </div>
            </div>

            {/* Project 4  */}
            <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
                <div className="rounded-lg">
                    <img className="" alt="memories app" src="https://i.ibb.co/MRyFvVT/ethereum-1024x683.jpg" />
                </div>
                <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">A Simple Voting dApp</h4>
                <p className="text-sm py-2">A voting dApp that allows users to choose between three specified candidates.
                    <span className="py-1"> Built using Javascript, Solidity, Ethers.js, Ganache.
                    </span>
                </p>
                <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" 
                href="https://github.com/thestriver/js-eth-votingdapp">
                    Link  
                </a>
                </div>
            </div>
        </div>
        </div>
       </>
        
    )
}