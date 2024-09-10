import { Carousel } from 'rsuite';

export const CarouselDefault = () => {
    return (

    <div className="container mx-auto px-2">
        <Carousel autoplay  shape={"bar"}   >
            <img className="object-cover" src="https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="350" />
            <img className="object-cover" src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="350" />
            <img className="object-cover" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="350" />
            <img className="object-cover" src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="350" />
            <img className="object-cover" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="350" />
        </Carousel>
    </div>

    )
}

