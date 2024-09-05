export const HomepageCard = () => {
   
    const JewelryObj = [
        {
            name: "Pendant",
            image: "https://images.unsplash.com/photo-1725033796879-f8c3a3309c0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 300
        },
        {
            name: "Necklace",
            image: "https://images.unsplash.com/photo-1685970731571-72ede0cb26ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5lY2tsYWNlfGVufDB8fDB8fHww",
            price: 500
        },
        {
            name: "Rings",
            image: "https://images.unsplash.com/photo-1503314885798-a70f8f9028d3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 100
        },
        {
            name: "Bracelet",
            image: "https://images.unsplash.com/photo-1508022909583-69228d7b2f8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            price: 200
        },
        {
            name: "Earrings",
            image: "https://images.unsplash.com/photo-1705326454933-9685fc6888e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVhcnJpbmd8ZW58MHx8MHx8fDA%3D",
            price: 100
        },
        {
            name: "Pierced Jewelry",
            image: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGllcmNlZCUyMEpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            price: 200
        },
    ]
    return (
        <div className="container mx-auto  mt-10 flex flex-row gap-10 overflow-hidden mb-10 justify-center items-center">
            {JewelryObj.map((item, index) => {
                return (
                    <span key={index} className="flex flex-col items-center ">
                        <span className="w-[13.5rem] h-[13.5rem] bg-black text-white rounded-full flex items-center justify-center overflow-hidden">
                            <img className="object-cover w-full h-full" src={item.image} alt="Circular Image" />
                        </span>
                        <p className="mt-4 text-2xl semibold">{item.name}</p>
                    </span>
                )
            })}
        </div>
    )
}

