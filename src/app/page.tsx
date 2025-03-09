import { Categories } from "./home/Categories";
import { DeliveryInfo } from "./home/DeliveryInfo";
import { Welcome } from "./home/Welcome";
import { TopProducts } from "./home/TopProducts";
import { Location } from "./home/Location";
import { Features } from "./home/Features";

export default function Home() {
    return (
        <div>
            <Welcome />
            <Categories />
            <TopProducts />
            <DeliveryInfo />
            <Location />
            <Features />
        </div>
    );
}
