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
        {/* Resize the preview panel to check the responsiveness*/}                
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-7xl">
        {/* Project 1  */}
        <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
            <div className="rounded-lg">
                <img className="" alt="donate app" src="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/0x7x1ZpF9iTPKKZu13qK1Nxhh6wq1TlFf5ltybT6.png" />
            </div>
            <div className="flex flex-col items-start mt-4">
                <h4 className="text-xl font-semibold">Donate A School Kit dApp</h4>
                <p className="text-sm py-2">
                    A dApp for donating school kits to underpriviledged school kids. <br />
                    <span className="py-1">Built using Solidity, React (Next.js), Ethers.js and Tailwind CSS.</span>
                </p>
                <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href="#">
                    Link 
                </a>
            </div>
        </div>
        {/* Project 2  */}
        <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
            <div className="rounded-lg">
                <img className="" alt="devore app" src="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/0x7x1ZpF9iTPKKZu13qK1Nxhh6wq1TlFf5ltybT6.png" />
            </div>
            <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Devore Educational dApp</h4>
            <p className="text-sm py-2">A web3 Educational Adventure. Winners get a cool gift at the end.
                <span className="py-1 "> Built using Typescript, React JS, Ethers.js, Headless UI and Tailwind CSS.</span>
            </p>
            <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href="#">
                Link 
            </a>
            </div>
        </div>
        {/* Project 3  */}
        <div className="flex flex-col bg-gray-900 text-white rounded-lg p-4 m-2">
            <div className="rounded-lg">
                <img className="" alt="moralised app" src="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/0x7x1ZpF9iTPKKZu13qK1Nxhh6wq1TlFf5ltybT6.png" />
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
                <img className="" alt="memories app" src="https://metaschool.s3-ap-southeast-1.amazonaws.com/images/0x7x1ZpF9iTPKKZu13qK1Nxhh6wq1TlFf5ltybT6.png" />
            </div>
            <div className="flex flex-col items-start mt-4">
            <h4 className="text-xl font-semibold">Memories</h4>
            <p className="text-sm py-2">An dApp that stores memories forever. Images and texts are stored on a decentralized file chain. 
                <span className="py-1"> Built using React JS, CSS and the IPFS web3 protocol.</span>
            </p>
            <a className="pb-2 leading-none rounded-xl font-bold mt-3 underline text-green-600 text-sm" href="https://memories-ten.vercel.app/">
                Link  
            </a>
            </div>
        </div>
        </div>
        </div>
       </>
        
    )
}