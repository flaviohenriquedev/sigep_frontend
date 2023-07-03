import PageConfig from "@/components/layout/page/page_config/PageConfig";
import { GlobalConfigs } from "@/data/global/GlobalConfigs";



const ConfigFleet = () => {
    return (
        <PageConfig data={GlobalConfigs} module="FL"/>
    );
};

export default ConfigFleet;
