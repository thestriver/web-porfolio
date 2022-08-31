import { ArticleCard as Card} from './ArticleCard'

export const Articles = () => {
    return (
       <>
            <div className="container flex flex-col items-center px-4 mx-auto xl:flex-row">
                <div className="flex flex-col mt-2 xl:items-start xl:pt-10">
                    <h1 className="text-3xl font-bold tracking-tight text-white xl:text-4xl">Technical Articles 📖</h1> 
                    <p className="block lg:max-w-5xl font-normal my-3 text-xl text-gray-200 tracking-wide">
                        I also love writing <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
                        >web3</span> technical articles. I believe the best developers are those who are able to document their projects.
                    </p>
                </div>
            </div>

            <div className="container flex flex-col items-center px-2 pt-4 pb-12 mx-auto xl:flex-row">            
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 xl:space-x-5 xl:max-w-7xl">
                    {/* Tile 1  */}
                    <Card title={'A Simple Ethereum Blockchain Explorer with Javascript, QuickNode API, and Tailwind CSS'} 
                        link={'https://adeleyemahmud.com/2021/06/13/a-simple-ethereum-blockchain-explorer-with-javascript-quicknode-and-tailwind-css/'}
                    />

                    {/* Tile 2  */}
                    <Card title={'Build a Token Dashboard with React Hooks, Moralis API, and Bootstrap CSS'} 
                        link={'https://adeleyemahmud.com/2021/08/09/build-a-token-dashboard-with-react-hooks-moralis-api-and-bootstrap-css/'}
                    />
                    
                    {/* Tile 3  */}
                    <Card title={'Build A Metamask connect button with TypeScript.'} 
                        link={'https://adeleyemahmud.com/2022/03/25/add-a-web3-connect-button-to-your-react-app-with-typescript-and-metamask/'}
                    />
                    
                   {/* Tile 4  */}
                   <Card title={'You Do Have Something To Hide – Why You Should Worry About Your Online Privacy'} 
                        link={'https://adeleyemahmud.com/2021/06/13/you-do-have-something-to-hide-why-you-should-worry-about-your-online-privacy/'}
                    />
                </div>
            </div>
       </>
        
    )
}