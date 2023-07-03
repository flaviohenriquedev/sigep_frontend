
import { Tab } from "@/@types/shopping/ShoppingTypes";
import BiddingBasicInformationPage from "./basic_information/BiddingBasicInformationPage";
import BiddingFiles from "./files/BiddingFiles";
import PageMain from "@/components/layout/page/main/PageMain";

export default function BiddingPage() {
    const tabs: Tab[] = [
        {
            label: "Dados Básicos",
            content: (
                <div>
                    <BiddingBasicInformationPage />
                </div>
            ),
        },
        {
            label: "Arquivos",
            content: (
                <div>
                    <BiddingFiles />
                </div>
            ),
        },
    ];

    return <PageMain tabs={tabs}></PageMain>;
}
